import TaskCard from "./TaskCard";

function TaskList({ tasks, onToggleTaskComplete }) {
  return (
    <section>
      <h2>Marketing Tasks</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      ))}
    </section>
  );
}

export default TaskList;