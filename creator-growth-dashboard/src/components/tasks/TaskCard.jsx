function TaskCard({ task, onToggleTaskComplete }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong> {task.completed ? "Complete" : "Incomplete"}
      </p>

      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTaskComplete(task.id)}
        />
        Mark Complete
      </label>
    </div>
  );
}

export default TaskCard;