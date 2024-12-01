import "../styles/main.scss";
import { FC, useEffect, useState } from "react";
import TaskCalendar from "./Calendars/Calendar";
import axios from "axios";
// import TopAppBar from "./TopAppBar";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const PREFIX = "/api/v1";
export const API_ENDPOINT = import.meta.env.VITE_TASK_ENDPOINT + PREFIX;

export type EventProps = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  color: string;
};

interface Props {
  date: Date;
}
const Main: FC<Props> = ({ date }) => {
  const EVENTS: Array<EventProps> = [];

  const [_events, setEvents] = useState<EventProps[]>([]);
  useEffect(() => {
    axios
      .get(API_ENDPOINT + "/events")
      .then((response) => {
        setEvents(
          response.data.map((datum: EventProps) => {
            return {
              title: datum.title,
              color: datum.color,
              description: datum.description,
              startDate: new Date(datum.startDate),
              endDate: new Date(datum.endDate),
            };
          }),
        );
      })
      .catch((error) => {
        console.log(error);
        setEvents(EVENTS);
      });
  }, []);
  return (
    <div className="w-full h-full flex flex-col">
      <main className="calendar-container">
        <SideBar />
        <div className="calendar-view">
          <Navbar />
          <TaskCalendar date={date} type={"weekly"} events={_events} />
        </div>
      </main>
    </div>
  );
};

export default Main;
