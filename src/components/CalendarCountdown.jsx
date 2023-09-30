import React, { useEffect } from "react";
import "./component.css";

const CalendarCountdown = () => {
  let date = [];
  const dataNum = JSON.parse(localStorage.getItem("data"));
  date.push(dataNum);
  console.log(date);
  function renderCalendar() {
    const launchDateInput = new Date(date[0].date);
    // const v = localStorage.getItem("data");
    // console.log(v);
    const calendarBody = document.getElementById("calendar-body");
    const monthName = document.getElementById("month-name");

    // Get the launch date from the user input
    const launchDate = new Date(launchDateInput);

    // Get the current date
    const currentDate = new Date();

    // Clear the existing calendar content
    calendarBody.innerHTML = "";

    // Display the month name above the calendar
    const monthText = launchDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    console.log(monthText);
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
    // const tasks = demo.reverse();

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

      //todo: Calculate the task index based on the date difference
      const taskIndex = Math.min(
        Math.max(
          0,
          Math.floor((launchDate - currentDate) / (24 * 60 * 60 * 1000))
        ),
        tasks.length - 1
      );

      //* test
      /*  const division = 24 * 60 * 60 * 1000;
      const test1 = Math.floor(launchDate - currentDate);
      console.log(test1 / division);
      console.log(tasks.length - 1);

      console.log(Math.max(0, 3));
      console.log(taskIndex); */

      //todo: getting the remaining days
      const dateOne = currentDate;
      const dateTwo = launchDate;
      const diffTime = Math.abs(dateTwo - dateOne);
      const diffDays = Math.ceil(diffTime / (24 * 60 * 60 * 1000));
      const remDays = `Remaining: ${diffDays}d`;
      console.log(remDays);

      const taskText = document.createElement("div");
      const remaining = document.createElement("div");
      remaining.className = "remaining";
      taskText.className = "task";
      taskText.textContent = tasks[9 - taskIndex];
      remaining.textContent = remDays;

      // console.log(taskIndex);

      taskContainer.appendChild(dateText);
      // taskContainer.appendChild(dayNameText); // Add the day name
      // creating Pre launch label
      const preLaunch = document.createElement("div");
      preLaunch.className = "prelaunch-days";
      preLaunch.textContent = `Pre-launch Day: ${tasks.length + 1 - diffDays}`;
      taskContainer.appendChild(preLaunch);
      taskContainer.appendChild(taskText);
      dateText.appendChild(dayNameText);
      taskText.appendChild(remaining);
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

    // setting up preparion for allocated 10 days
    const prepTasks = [
      "Send open-cart emails",
      "Have some rest 👋🏻",
      "Be prepare for the next day ✨",
      "Create waitlist page",
      "Create waitlist thank you page",
      "Write waitlist confirmation email",
      "Connect the tech pieces together",
      "Schedule cart close emails",
      "At ease , relax 🧘🏻‍♀️",
      "Redirect sales page to waitlist page",
    ];

    /*  //todo: getting the 10th date that comes after launch date
    const dateOfLastTen = new Date(launchDate);
    dateOfLastTen.setDate(dateOfLastTen.getDate() + 10);

    console.log(dateOfLastTen);

    const date1 = launchDate;
    const date2 = dateOfLastTen;
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.log(diffDays);

    //* 2nd attempt
    const taskIndexTwo = Math.min(
      Math.max(0, Math.floor(10 / (24 * 60 * 60 * 1000))),
      prepTasks.length - 1
    );
    console.log(taskIndexTwo);

    //* 3rd attempt
    let a;
    const taskIndexPrime = () => {
      for (let i = 0; i <= prepTasks.length - 1; i++) {
        return (a = i);
      }
    }; */

    /* console.log(taskIndexTwo);
    console.log(prepTasks[9 - taskIndexTwo]); */

    // Automatically generate 10 more days after the launch date
    for (let i = 0; i < 10; i++) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
      const cell = document.createElement("td");
      const taskContainer = document.createElement("div");
      taskContainer.className = "task-container";
      const dateText = document.createElement("div");
      dateText.className = "date";
      dateText.textContent = currentDate.getDate();
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
      const monthName = document.createElement("div");
      monthName.className = "monthName";
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      monthName.textContent = monthNames[currentDate.getMonth()];
      taskContainer.appendChild(dateText);
      dateText.appendChild(dayNameText);
      dayNameText.appendChild(monthName);
      const taskText = document.createElement("div");
      taskText.className = "task";
      const secondTaskIndex = Math.min(prepTasks.length - 1, i);
      taskText.textContent = prepTasks[secondTaskIndex];
      const remDays = Math.min(prepTasks.length - 1, i);
      const remaining = document.createElement("div");
      remaining.className = "remaining cartDays";
      remaining.textContent = `Remaing: ${10 - remDays}d`;
      const cartDays = document.createElement("div");
      cartDays.className = "cart-day";
      cartDays.textContent = `Cart Day ${remDays + 1}`;
      taskContainer.appendChild(cartDays);
      taskText.appendChild(remaining);

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
  useEffect(() => {
    renderCalendar();
  }, []);

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
