import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage({ tasks }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section>
      <header>
        <h1>Marketing Calendar</h1>

        <p>
          Plan campaigns, review deadlines, and keep upcoming marketing work
          organized from one centralized calendar.
        </p>

        <p>
          This planning view helps maintain consistency across content,
          promotions, product activity, and other business priorities.
        </p>
      </header>

      <section>
        <h2>Plan Your Schedule</h2>

        <p>
          Select a date to review your schedule and prepare for upcoming work.
        </p>

        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
        />

        <p>
          <strong>Selected Date:</strong>{" "}
          {selectedDate.toLocaleDateString()}
        </p>
      </section>

      <section>
        <h2>Current Marketing Tasks</h2>

        <p>
          Review active priorities and completed work connected to your
          marketing workflow.
        </p>

        {tasks.length === 0 ? (
          <p>No marketing tasks are currently available.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <strong>{task.title}</strong>
                {" — "}
                Priority: {task.priority}
                {" — "}
                Status: {task.completed ? "Complete" : "Incomplete"}
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}

export default CalendarPage;