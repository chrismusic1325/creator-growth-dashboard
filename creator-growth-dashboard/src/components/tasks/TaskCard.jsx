function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>
        <strong>Priority:</strong> {task.priority}
      </p>
      <p>
        <strong>Status:</strong> {task.completed ? "Complete" : "Incomplete"}
      </p>
    </div>
  );
}

export default TaskCard;