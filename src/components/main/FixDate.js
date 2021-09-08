import { format } from "date-fns"

export default function FixDate(props) {
    const date = new Date(props.fix.fixture.date)
    const DateDayAndMoth = format(date, `dd/MM`)
    const DateHours = format(date, `HH:mm`)
    // console.log(DateDayAndMoth, DateHours)
    return <>
    <span className="text-xs leading-none block text-center pt-3 text-gray-500">{DateDayAndMoth}</span>
    <span className="text-xs leading-none block text-center text-gray-500">{DateHours}</span>
    </>
}