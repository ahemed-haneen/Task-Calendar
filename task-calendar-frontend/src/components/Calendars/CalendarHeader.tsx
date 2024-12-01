import { FC } from "react";
import { formatMonth, formatDate } from "../../utils/format";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import "../../styles/main.scss";

const CalendarHeader: FC<{ date: Date; weekdays: Array<string> }> = ({
  date,
  weekdays,
}) => {
  const dayIndex = date.getDay();
  const dateValue = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const DAY_HEADERS = weekdays.map((day, index) => (
    <div
      key={"header" + index}
      className={
        "day text-center font-medium text-sm p-2 h-max" +
        (index == dayIndex ? " today" : "")
      }
    >
      <span className="text-2xl">
        {formatDate(dateValue - dayIndex + index)}
      </span>{" "}
      {day}
    </div>
  ));

  return (
    <>
      <div className="calendar-header">
        <h3>
          {formatMonth(currentMonth)} {currentYear}
        </h3>
        <div className="view-buttons">
          <button>
            <NavigateBefore />
          </button>
          <button>
            <NavigateNext />
          </button>
          <button>Today</button>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <div className="grow-0 basis-14"></div>
        <div className="grow grid grid-cols-7 gap-1">{DAY_HEADERS}</div>
      </div>
    </>
  );
};

export default CalendarHeader;
