import { format } from "date-fns"

export default function FixDate(props) {
    console.log('props date',props)
    const date = new Date(props.fix.fixture.date)
    const DateDayAndMoth = format(date, `dd/MM`)
    const DateHours = format(date, `HH:mm`)
    // console.log(DateDayAndMoth, DateHours)
    return <>
    <span className="text-xs leading-none text-center pt-3 text-gray-500">{DateDayAndMoth}</span>
    <span className="text-xs leading-none text-center text-gray-500 ml-1">{DateHours}</span>
    </>
}