import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz"
import { fixStatus } from "../../utills/fixstatus";

export default function FixDate(props) {
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date(zonedTimeToUtc(props.fix.fixture.date, tzid))
    const DateDayAndMoth = format(date, `dd/MM`)
    const DateHours = format(date, `HH:mm`)

    const status = fixStatus.find(status => {
        return status.name == props.fix.fixture.status.short
    })
    console.log(status)
    return <>
        <span className={`${status.classNames} text-xs leading-none text-center text-yellow-600 font-semibold p-0.5 mr-2`}>{status.label}</span>
        <span className="text-xs leading-none text-center pt-3 text-gray-500 font-normal">{DateDayAndMoth}</span>
        <span className="text-xs leading-none text-center text-gray-500 ml-1 font-normal">{DateHours}</span>
    </>
}