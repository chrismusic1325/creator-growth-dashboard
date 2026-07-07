import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <section>
      <h2>Marketing Tasks</h2>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
}

export default TaskList;