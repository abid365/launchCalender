import React, { useState } from "react";

function CalendarCountdown() {
  const [launchDate, setLaunchDate] = useState("");
  const [calendarContent, setCalendarContent] = useState([]);

  const tasks = [
    "Create course outline",
    "Record course videos",
    "Edit course content",
    "Set up eKajabi platform",
    "Create marketing materials",
    "Promote the course",
    "Engage with students",
    "Finalize course materials",
    "Launch the course",
    "Monitor course progress",
  ];

  const renderCalendar = () => {
    const selectedDate = new Date(launchDate);
    const currentDate = new Date();
    let calendarRows = []; // Initialize as an empty array

    while (currentDate <= selectedDate) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
      const taskIndex = Math.min(
        Math.max(
          0,
          Math.floor((selectedDate - new Date()) / (24 * 60 * 60 * 1000))
        ),
        tasks.length - 1
      );

      const dateCell = (
        <td key={currentDate}>
          <div className="task-container bg-gray-100 border p-2">
            <div className="text-sm text-left pb-1">
              {currentDate.getDate()}
            </div>
            <div className="text-sm text-center">{tasks[taskIndex]}</div>
          </div>
        </td>
      );

      if (dayOfWeek === 0) {
        calendarRows.push(<tr key={currentDate}>{dateCell}</tr>);
      } else {
        // Check if the last array element exists and initialize if needed
        if (!calendarRows[calendarRows.length - 1]) {
          calendarRows[calendarRows.length - 1] = [];
        }
        calendarRows[calendarRows.length - 1].push(dateCell);
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Add 10 more days after the launch date
    for (let i = 0; i < 10; i++) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
      const dateCell = (
        <td key={currentDate}>
          <div className="task-container bg-gray-100 border p-2">
            <div className="text-sm text-left pb-1">
              {currentDate.getDate()}
            </div>
          </div>
        </td>
      );

      if (dayOfWeek === 0) {
        calendarRows.push(<tr key={currentDate}>{dateCell}</tr>);
      } else {
        // Check if the last array element exists and initialize if needed
        if (!calendarRows[calendarRows.length - 1]) {
          calendarRows[calendarRows.length - 1] = [];
        }
        calendarRows[calendarRows.length - 1].push(dateCell);
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    setCalendarContent(calendarRows);
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-4 mb-2">
        Countdown to Launch in Calendar Format
      </h1>
      <label htmlFor="launchDate" className="block font-bold">
        Enter Launch Date:
      </label>
      <input
        type="date"
        id="launchDate"
        value={launchDate}
        onChange={(e) => setLaunchDate(e.target.value)}
        className="p-2 border border-gray-300 rounded mt-1 mb-2"
      />
      <button
        onClick={renderCalendar}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Render Calendar
      </button>
      <div id="calendar-container" className="mt-4">
        <div id="month-name" className="font-bold text-xl mb-2">
          {launchDate &&
            new Date(launchDate).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
        </div>
        <table
          id="calendar"
          className="w-full border-collapse border border-gray-300"
        >
          <thead>
            <tr>
              <th className="bg-gray-200 text-center p-2">Sun</th>
              <th className="bg-gray-200 text-center p-2">Mon</th>
              <th className="bg-gray-200 text-center p-2">Tue</th>
              <th className="bg-gray-200 text-center p-2">Wed</th>
              <th className="bg-gray-200 text-center p-2">Thu</th>
              <th className="bg-gray-200 text-center p-2">Fri</th>
              <th className="bg-gray-200 text-center p-2">Sat</th>
            </tr>
          </thead>
          <tbody>{calendarContent}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CalendarCountdown;
