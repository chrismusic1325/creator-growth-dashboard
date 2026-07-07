import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleSubmit(event) {
    event.preventDefault();

    if (!taskTitle) {
      return;
    }

    onAddTask({
      id: Date.now(),
      title: taskTitle,
      priority: priority,
      completed: false,
    });

    setTaskTitle("");
    setPriority("Medium");
  }

  return (
    <section>
      <h2>Add Marketing Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />

        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}

export default TaskForm;