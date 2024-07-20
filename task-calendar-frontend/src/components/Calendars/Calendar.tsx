import { FC } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";
import { TaskProps } from "../../App";
import CalendarWeekBar from "./CalendarWeekBar";

const TaskCalendar: FC<{
  date: Date;
  type: "weekly" | "daily" | "monthly";
  tasks: Array<TaskProps>;
}> = ({ date, tasks }) => {
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const DAY_TASKS: { [key: string]: Array<TaskProps> } = {};
  const LONG_TASKS: Array<TaskProps> = [];

  tasks.forEach((task) => {
    const START_DATE = task.startDate.toDateString();
    const END_DATE = task.endDate.toDateString();

    if (START_DATE === END_DATE) {
      if (!DAY_TASKS[START_DATE]) DAY_TASKS[START_DATE] = [];

      DAY_TASKS[START_DATE].push(task);
    } else {
      LONG_TASKS.push(task);
    }
  });
  return (
    <div className="h-full grid grid-rows-[auto_auto_auto] gap-2 bg-stone-300 rounded p-4 overflow-y-hidden">
      <CalendarHeader date={date} weekdays={WEEKDAYS} />
      <CalendarWeekBar date={date} tasks={LONG_TASKS} />
      <CalendarCells date={date} tasks={DAY_TASKS} weekdays={WEEKDAYS} />
    </div>
  );
};

export default TaskCalendar;
