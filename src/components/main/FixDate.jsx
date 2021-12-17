import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz"
import { useRef, useState } from "react";
import { fixStatus } from "../../utills/fixstatus";

export default function FixDate(props) {

    const [timeMinutes, setTimeMinutes] = useState('00')
    const [timeSeconds, setTimeSeconds] = useState('00')
    const [live, setLive] = useState(false)

    let interval = useRef()

    const srartTimer = () => {
        const startTimestamp = new Date(props.fix.fixture.timestamp).getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = startTimestamp - now

            const minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            const seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000))

            if (distance > 0) {
                clearInterval(interval.current)
            } else {
                setTimeMinutes(minutes < 10 ? `0${minutes}` : minutes)
                setTimeSeconds(seconds < 10 ? `0${seconds}` : seconds)
            }
        }, 1000)

    }
    useState(() => {
        if (props.fix.fixture.status.short == '2H' || props.fix.fixture.status.short == '1H') {
            setLive(true)
            srartTimer()
            return () => {
                clearInterval(interval.current)
            }
        }
    }, [])
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date(zonedTimeToUtc(props.fix.fixture.date, tzid))
    const DateDayAndMoth = format(date, `dd/MM`)
    const DateHours = format(date, `HH:mm`)

    const status = fixStatus.find(status => {
        if (status.name == props.fix.fixture.status.short) {
            return true
        } else {
            return false
        }
    })
    return <>
        {live && <>
            <span className={`${status.classNames} text-xs block md:inline-block leading-none text-gray-500 font-semibold p-0.5`}>{status.label}</span>
            <span className="text-xs leading-none text-center pt-3 text-red-500 font-bold">AO VIVO</span>
            <span className="text-xs leading-none text-center text-gray-500 ml-1 font-normal">{timeMinutes}:{timeSeconds}</span>
        </>
        }
        {!live && <>
            {/* <span className={`${status.classNames} text-xs block md:inline-block leading-none text-primary font-semibold p-0.5`}>{status.label}</span> */}
            <span className="text-xs leading-none text-center pt-3 text-gray-500 font-normal">{DateDayAndMoth}</span>
            <span className="text-xs leading-none text-center text-gray-500 ml-1 font-normal">{DateHours}</span>
        </>
        }

    </>
}