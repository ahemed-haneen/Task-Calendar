// import { useState } from 'react'
import './App.css'
import TaskCalendar from './components/Calendars/Calendar'

export type TaskProps = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  color: string;
}

function App() {
  const TODAY = new Date('12/16/1997')
  const TASKS: Array<TaskProps> = [
    {
      title: "Task 1",
      color: "#7B9CD7",
      description: "First task description",
      startDate: new Date("1997-12-16T08:00:00"), // 8:00 AM
      endDate: new Date("1997-12-16T09:15:00"), // 9:15 AM
    },
    {
      title: "Task 2",
      color: "#1da1f2",
      description: "Second task description",
      startDate: new Date("1997-12-16T10:30:00"), // 10:30 AM
      endDate: new Date("1997-12-16T11:45:00"), // 11:45 AM
    },
    {
      title: "Task 3",
      color: "#DD4646",
      description: "Third task description",
      startDate: new Date("1997-12-16T13:15:00"), // 1:15 PM
      endDate: new Date("1997-12-16T14:00:00"), // 2:00 PM
    },
    {
      title: "Task 4",
      color: "#1da1f2",
      description: "Write conclusion",
      startDate: new Date("1997-12-16T15:30:00"), // 3:30 PM
      endDate: new Date("1997-12-17T09:00:00"), // Next day, 9:00 AM
    },
    {
      title: "Task 5",
      color: "#DD4646",
      description: "Review draft",
      startDate: new Date("1997-12-16T16:30:00"), // 4:30 PM
      endDate: new Date("1997-12-17T10:00:00"), // Next day, 10:00 AM
    },
    {
      title: "Task 6",
      color: "#eec900",
      description: "Project kickoff meeting",
      startDate: new Date("1997-12-16T14:00:00"), // 2:00 PM
      endDate: new Date("1997-12-18T11:30:00"), // Third day, 11:30 AM
    },
    {
      title: "Task 7",
      color: "#7BD699",
      description: "Data Collection",
      startDate: new Date("1997-12-14T09:00:00"), // Dec 14, 1997, 9:00 AM
      endDate: new Date("1997-12-16T17:30:00"), // Dec 16, 1997, 5:30 PM
    },
    {
      title: "Task 8",
      color: "#7B9CD7",
      description: "Data Analysis",
      startDate: new Date("1997-12-18T10:00:00"), // Dec 18, 1997, 10:00 AM
      endDate: new Date("1997-12-20T15:45:00"), // Dec 20, 1997, 3:45 PM
    },
    {
      title: "Task 9",
      color: "#7B9CD7",
      description: "Data Analysis",
      startDate: new Date("1997-12-12T10:00:00"), // Dec 18, 1997, 10:00 AM
      endDate: new Date("1997-12-19T15:45:00"), // Dec 20, 1997, 3:45 PM
    },
    {
      title: "Task 10",
      color: "#7B9CD7",
      description: "Data Analysis",
      startDate: new Date("1997-12-12T10:00:00"), // Dec 18, 1997, 10:00 AM
      endDate: new Date("1997-12-21T15:45:00"), // Dec 20, 1997, 3:45 PM
    },
    {
      title: "Task 11",
      color: "#7BD699",
      description: "Data Collection",
      startDate: new Date("1997-12-16T09:00:00"), // Dec 14, 1997, 9:00 AM
      endDate: new Date("1997-12-16T17:30:00"), // Dec 16, 1997, 5:30 PM
    },
    {
      title: "Task 12",
      color: "#eec900",
      description: "Data Collection",
      startDate: new Date("1997-12-16T14:00:00"), // Dec 14, 1997, 9:00 AM
      endDate: new Date("1997-12-16T17:30:00"), // Dec 16, 1997, 5:30 PM
    },
    {
      title: "Task 13",
      color: "#7B9CD7",
      description: "Data Collection",
      startDate: new Date("1997-12-16T09:00:00"), // Dec 14, 1997, 9:00 AM
      endDate: new Date("1997-12-16T09:30:00"), // Dec 16, 1997, 5:30 PM
    },
    {
      title: "Task 14",
      color: "#7B9CD7",
      description: "Data Collection",
      startDate: new Date("1997-12-16T09:00:00"), // Dec 14, 1997, 9:00 AM
      endDate: new Date("1997-12-16T09:30:00"), // Dec 16, 1997, 5:30 PM
    },
    {
      title: "Task 15",
      color: "#7BD699",
      description: "Data Collection",
      startDate: new Date("1997-12-18T09:00:00"), // Dec 14, 1997, 9:00 AM
      endDate: new Date("1997-12-18T17:30:00"), // Dec 16, 1997, 5:30 PM
    },
  ]

  return (
    <div className="w-full h-full flex flex-col">
      <header className="text-left mb-6 text-4xl font-semibold text-white grow-0">
        <h1>Task Calendar</h1>
      </header>
      <main className="grow overflow-y-hidden">
        <TaskCalendar date={TODAY} type={'weekly'} tasks={TASKS} />
      </main>
    </div>
  )
}

export default App
