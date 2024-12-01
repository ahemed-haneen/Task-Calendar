import { FC } from "react";
import { EventProps } from "../Main";
import isDateInRange from "../../utils/isDateBefore";

const CalendarWeekBar: FC<{
  date: Date;
  weekdays?: Array<string>;
  events: Array<EventProps>;
}> = ({ date, events }) => {
  return (
    <div className="flex flex-row gap-1">
      <div className="basis-14 grow-0"></div>
      <div className="grid grid-auto-rows grow grid-cols-7 grid-flow-dense">
        {events.map((event, index) => {
          const IS_DATE_BEFORE = !isDateInRange(
            date,
            event.startDate,
            "week",
            "before",
          );
          const IS_DATE_AFTER = !isDateInRange(
            date,
            event.endDate,
            "week",
            "after",
          );

          const START_DAY = IS_DATE_BEFORE ? 1 : event.startDate.getDay() + 1;
          const END_DAY = IS_DATE_AFTER ? 8 : event.endDate.getDay() + 1;

          // ! *******************************
          // ! Fix col start and col end issue
          // ! *******************************
          // ! return <div className={`col-start-${START_DAY} col-span-${END_DAY - START_DAY} m-0.5` + (IS_DATE_BEFORE ? '' : ' rounded-l-xl') + (IS_DATE_AFTER ? '': ' rounded-r-xl')} style={{ background: task.color }}>
          // !    {task.title}
          // ! </div>
          // ! *******************************

          return (
            <div
              key={"week-bar" + index + "-" + event.title}
              className={
                `text-left px-2 py-2 text-white font-semibold text-xs m-0.5` +
                (IS_DATE_BEFORE ? "" : " rounded-l-xl") +
                (IS_DATE_AFTER ? "" : " rounded-r-xl")
              }
              style={{
                background: event.color,
                gridColumnStart: START_DAY,
                gridColumnEnd: END_DAY,
              }}
            >
              {event.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWeekBar;
