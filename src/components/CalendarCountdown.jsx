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
    const calendarRows = [];

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
          <div className="task-container">
            <div className="date">{currentDate.getDate()}</div>
            <div className="task">{tasks[taskIndex]}</div>
          </div>
        </td>
      );

      if (dayOfWeek === 0) {
        calendarRows.push(<tr key={currentDate}>{dateCell}</tr>);
      } else {
        calendarRows[calendarRows.length - 1].push(dateCell);
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Add 10 more days after the launch date
    for (let i = 0; i < 10; i++) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
      const dateCell = (
        <td key={currentDate}>
          <div className="task-container">
            <div className="date">{currentDate.getDate()}</div>
          </div>
        </td>
      );

      if (dayOfWeek === 0) {
        calendarRows.push(<tr key={currentDate}>{dateCell}</tr>);
      } else {
        calendarRows[calendarRows.length - 1].push(dateCell);
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    setCalendarContent(calendarRows);
  };

  return (
    <div>
      <h1>Countdown to Launch in Calendar Format</h1>
      <label htmlFor="launchDate">Enter Launch Date:</label>
      <input
        type="date"
        id="launchDate"
        value={launchDate}
        onChange={(e) => setLaunchDate(e.target.value)}
      />
      <button onClick={renderCalendar}>Render Calendar</button>
      <div id="calendar-container">
        <div id="month-name">
          {launchDate &&
            new Date(launchDate).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
        </div>
        <table id="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>{calendarContent}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CalendarCountdown;
