import { FC } from "react"
import formatDate from "../../utils/format-date";

const CalendarHeader: FC<{ date: Date, weekdays: Array<string> }> = ({ date, weekdays }) => {
    const dayIndex = date.getDay();
    const dateValue = date.getDate()

    let daysHeader = weekdays.map((day, index) =>
        <div className={'text-left font-medium text-sm bg-stone-100 p-2 h-max' + (index == dayIndex ? ' border-b-4 border-black' : '')}>
            <span className="text-2xl">{formatDate(dateValue - dayIndex + index)}</span> {day}
        </div>
    )

    return <div className='grid grid-cols-7 gap-1 ml-14'>
        {daysHeader}
    </div>
}

export default CalendarHeader