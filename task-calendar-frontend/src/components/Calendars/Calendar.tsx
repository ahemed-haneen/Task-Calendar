import { FC } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";
import { EventProps } from "../Main";
import CalendarWeekBar from "./CalendarWeekBar";

const TaskCalendar: FC<{
  date: Date;
  type: "weekly" | "daily" | "monthly";
  events: Array<EventProps>;
}> = ({ date, events }) => {
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const DAY_EVENTS: { [key: string]: Array<EventProps> } = {};
  const LONG_EVENTS: Array<EventProps> = [];

  events.forEach((event) => {
    const START_DATE = event.startDate.toDateString();
    const END_DATE = event.endDate.toDateString();

    if (START_DATE === END_DATE) {
      if (!DAY_EVENTS[START_DATE]) DAY_EVENTS[START_DATE] = [];

      DAY_EVENTS[START_DATE].push(event);
    } else {
      LONG_EVENTS.push(event);
    }
  });
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-2 rounded p-4 overflow-y-hidden">
      <CalendarHeader date={date} weekdays={WEEKDAYS} />
      <CalendarWeekBar date={date} events={LONG_EVENTS} />
      <CalendarCells date={date} events={DAY_EVENTS} weekdays={WEEKDAYS} />
    </div>
  );
};

export default TaskCalendar;
