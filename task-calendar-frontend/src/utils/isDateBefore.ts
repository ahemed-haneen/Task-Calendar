const isDateInRange = (
  currentDate: Date,
  date: Date,
  range: "week" | "month" | "year",
  check: "before" | "after" | "both" = "both",
) => {
  let firstDay = new Date(currentDate);
  let lastDay = new Date(currentDate);

  if (range == "week") {
    firstDay.setDate(currentDate.getDate() - currentDate.getDay());
    lastDay.setDate(currentDate.getDate() + 7 - currentDate.getDay());
  } else if (range == "month") {
    firstDay.setDate(1);
    lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );
  } else if (range == "year") {
    firstDay = new Date(currentDate.getFullYear(), 1, 1);
    lastDay = new Date(currentDate.getFullYear(), 12, 31);
  }

  if (check == "before") return date >= firstDay;
  else if (check == "after") return date <= lastDay;

  return date >= firstDay && date <= lastDay;
};

export default isDateInRange;
