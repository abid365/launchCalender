import React, { useState } from "react";

const CalendarCountdown = () => {
  function renderCalendar() {
    const launchDateInput = JSON.parse(localStorage.getItem("data"));
    const calendarBody = document.getElementById("calendar-body");
    const monthName = document.getElementById("month-name");

    // Get the launch date from the user input
    const launchDate = new Date(launchDateInput);
    console.log(launchDate);

    // Get the current date
    const currentDate = new Date();

    // Clear the existing calendar content
    calendarBody.innerHTML = "";

    // Display the month name above the calendar
    const monthText = launchDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    monthName.textContent = monthText;

    // Initialize an array to store the tasks
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

    // Create an empty table row
    let currentRow = document.createElement("tr");

    // Loop through the dates and create table cells with tasks from current date to launch date
    while (currentDate <= launchDate) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
      const cell = document.createElement("td");
      const taskContainer = document.createElement("div");
      taskContainer.className = "task-container";
      const dateText = document.createElement("div");
      dateText.className = "date";
      dateText.textContent = currentDate.getDate();

      // Display the day name on each day
      const dayNameText = document.createElement("div");
      dayNameText.className = "day-name";
      dayNameText.textContent = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ][dayOfWeek];

      // Calculate the task index based on the date difference
      const taskIndex = Math.min(
        Math.max(
          0,
          Math.floor((launchDate - new Date()) / (24 * 60 * 60 * 1000))
        ),
        tasks.length - 1
      );
      const taskText = document.createElement("div");
      taskText.className = "task";
      taskText.textContent = tasks[taskIndex];

      taskContainer.appendChild(dateText);
      taskContainer.appendChild(dayNameText); // Add the day name
      taskContainer.appendChild(taskText);
      cell.appendChild(taskContainer);

      // Check if it's a Sunday and move to the next row
      if (dayOfWeek === 0) {
        calendarBody.appendChild(currentRow);
        currentRow = document.createElement("tr");
      }

      currentRow.appendChild(cell);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Append the last row if it's not a full week
    if (currentRow.children.length > 0) {
      calendarBody.appendChild(currentRow);
    }
  }

  // end of renderCalendar function

  // todo: this showUi fn shows the calendar after 2sec

  const [loader, setLoader] = useState(true);

  const showUi = () => {
    if (loader) {
      setTimeout(() => {
        return <h1>Please wait..</h1>;
      }, 2000);

      setLoader(false);
      onload(renderCalendar());
    }
  };

  return (
    <div>
      <h1 className="text-center">Countdown to Launch in Calendar Format</h1>
      <div id="calendar-container">
        <div id="month-name"></div>
        <table id="calendar">
          <tbody id="calendar-body"></tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarCountdown;
