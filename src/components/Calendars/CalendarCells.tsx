import { FC } from "react";
import { TaskProps } from "../../App";

const CalendarCells: FC<{
  date: Date;
  tasks: { [key: string]: Array<TaskProps> };
  weekdays: Array<string>;
}> = ({ date, tasks, weekdays }) => {
  //  TODO: Refactor this code
  const DAYS_COLUMN = [];
  //  TODO: Refactor this code

  for (let dayOfWeek = 0; dayOfWeek < weekdays.length; dayOfWeek++) {
    const CURRENT_DATE = new Date(
      date.setDate(date.getDate() - date.getDay() + dayOfWeek),
    );
    const MIN_15_UNITS = [];

    for (let min15Count = 0; min15Count < 24; min15Count++) {
      MIN_15_UNITS.push(
        <div className={"bg-stone-100 pr-0 grid grid-rows-4"}>
          <div className="pr-6 h-3"></div>
          <div className="pr-6 h-3"></div>
          <div className="pr-6 h-3"></div>
          <div className="pr-6 h-3"></div>
        </div>,
      );
    }
    DAYS_COLUMN.push(
      <div className="relative grid gap-0.5 grow">
        {MIN_15_UNITS}
        <div className="grid absolute grid-rows-96 auto-cols-auto h-full w-full overflow-hidden pr-3">
          {tasks[CURRENT_DATE.toDateString()]?.map((task) => {
            const START_TIME_INDEX =
              task.startDate.getHours() * 4 +
              task.startDate.getMinutes() / 15 +
              1;
            const END_TIME_INDEX =
              task.endDate.getHours() * 4 + task.endDate.getMinutes() / 15 + 1;

            return (
              <div
                className="text-left px-2 py-2 text-white font-semibold text-xs rounded-lg mr-0.5 min-w-0 text-ellipsis overflow-hidden whitespace-nowrap"
                style={{
                  background: task.color,
                  gridRowStart: START_TIME_INDEX,
                  gridRowEnd: END_TIME_INDEX,
                }}
              >
                {task.title}
              </div>
            );
          })}
        </div>
      </div>,
    );
  }

  return (
    <div className="relative flex flex-row gap-1 overflow-y-auto -mr-3">
      <div className="basis-14 grow-0 grid grid-rows-24 gap-0.5">
        {(() => {
          const ITEMS = [];
          for (let hourCount = 0; hourCount < 24; hourCount++) {
            ITEMS.push(
              <div className={"bg-stone-100 pr-0 h-12 relative"}>
                <span className="absolute justify-self-center bg-stone-100 w-max -translate-x-2/4 -translate-y-2/4 z-20 text-xs">
                  {hourCount != 0 &&
                    hourCount + (hourCount > 11 ? " AM" : " PM")}
                </span>
              </div>,
            );
          }
          return ITEMS;
        })()}
      </div>
      <div className="grid grid-cols-7 grow gap-1">{DAYS_COLUMN}</div>
    </div>
  );
};

export default CalendarCells;
