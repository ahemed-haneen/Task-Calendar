import { FC } from "react";
import { TaskProps } from "../../App";
import isDateInRange from "../../utils/isDateBefore";

const CalendarWeekBar: FC<{
  date: Date;
  weekdays?: Array<string>;
  tasks: Array<TaskProps>;
}> = ({ date, tasks }) => {
  return (
    <div className="flex flex-row gap-1">
      <div className="bg-stone-100 basis-14 grow-0"></div>
      <div className="grid bg-stone-100 grid-auto-rows grow grid-cols-7 grid-flow-dense">
        {tasks.map((task, index) => {
          const IS_DATE_BEFORE = !isDateInRange(
            date,
            task.startDate,
            "week",
            "before",
          );
          const IS_DATE_AFTER = !isDateInRange(
            date,
            task.endDate,
            "week",
            "after",
          );

          const START_DAY = IS_DATE_BEFORE ? 1 : task.startDate.getDay() + 1;
          const END_DAY = IS_DATE_AFTER ? 8 : task.endDate.getDay() + 1;

          // ! *******************************
          // ! Fix col start and col end issue
          // ! *******************************
          // ! return <div className={`col-start-${START_DAY} col-span-${END_DAY - START_DAY} m-0.5` + (IS_DATE_BEFORE ? '' : ' rounded-l-xl') + (IS_DATE_AFTER ? '': ' rounded-r-xl')} style={{ background: task.color }}>
          // !    {task.title}
          // ! </div>
          // ! *******************************

          return (
            <div key={'week-bar' + index + '-' + task.title}
              className={
                `text-left px-2 py-2 text-white font-semibold text-xs m-0.5` +
                (IS_DATE_BEFORE ? "" : " rounded-l-xl") +
                (IS_DATE_AFTER ? "" : " rounded-r-xl")
              }
              style={{
                background: task.color,
                gridColumnStart: START_DAY,
                gridColumnEnd: END_DAY,
              }}
            >
              {task.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWeekBar;
