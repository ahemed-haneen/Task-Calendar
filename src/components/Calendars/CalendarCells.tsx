import { FC } from "react"

const CalendarCells: FC<{ date: Date, weekdays: Array<string> }> = ({ weekdays }) => {

//  TODO: Refactor this code 
    let daysColumn = [
        <div className="basis-14 grow-0 grid grid-rows-24 gap-0.5">
            {
                (() => {
                    let items = [];
                    for (let hourCount = 0; hourCount < 24; hourCount++) {
                        items.push(<div className={'bg-stone-100 pr-0 h-12 relative'}>
                            <span className="absolute justify-self-center bg-stone-100 w-max -translate-x-2/4 -translate-y-2/4 z-20 text-xs">
                            {hourCount != 0 && (hourCount + (hourCount > 11 ? " AM" : " PM"))}
                            </span>
                        </div>)
                    }
                    return items
                })()
            }
        </div>
    ]
    //  TODO: Refactor this code 

    for (let dayOfWeek = 0; dayOfWeek < weekdays.length; dayOfWeek++) {
        let min15Units = []

        for (let min15Count = 0; min15Count < 24; min15Count++) {
            min15Units.push(<div className={'bg-stone-100 pr-0 grid grid-rows-4 auto-cols-auto'}>
                <div className="pr-6 h-3"></div>
                <div className="pr-6 h-3"></div>
                <div className="pr-6 h-3"></div>
                <div className="pr-6 h-3"></div>
            </div>)
        }
        daysColumn.push(<div className="grid gap-0.5 grow">
            {min15Units}
        </div>)
    }

    return <div className='flex flex-row gap-1 overflow-y-auto -mr-3'>
        {daysColumn}
    </div>
}

export default CalendarCells