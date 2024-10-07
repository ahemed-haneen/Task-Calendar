import { FC } from "react";
import formatDate from "../../utils/format-date";

const CalendarHeader: FC<{ date: Date; weekdays: Array<string> }> = ({
  date,
  weekdays,
}) => {
  const dayIndex = date.getDay();
  const dateValue = date.getDate();

  const DAY_HEADERS = weekdays.map((day, index) => (
    <div
      key={"header" + index}
      className={
        "text-left font-medium text-sm bg-stone-100 p-2 h-max" +
        (index == dayIndex ? " border-b-4 border-black" : "")
      }
    >
      <span className="text-2xl">
        {formatDate(dateValue - dayIndex + index)}
      </span>{" "}
      {day}
    </div>
  ));

  return (
    <div className="flex flex-row gap-1">
      <div className="grow-0 basis-14"></div>
      <div className="grow grid grid-cols-7 gap-1">{DAY_HEADERS}</div>
    </div>
  );
};

export default CalendarHeader;
