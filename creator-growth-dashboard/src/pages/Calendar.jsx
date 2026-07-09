import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage({ tasks }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section>
      <h2>Calendar View</h2>
      <p>Use this calendar to review marketing tasks and plan upcoming work.</p>

      <Calendar onChange={setSelectedDate} value={selectedDate} />

      <h3>Marketing Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> — Priority: {task.priority} —{" "}
              {task.completed ? "Complete" : "Incomplete"}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CalendarPage;