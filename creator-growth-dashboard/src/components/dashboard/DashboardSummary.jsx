import Card from "../common/Card";

function DashboardSummary({ platforms, products, tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <Card title="Dashboard Summary">
      <ul>
        <li>Platforms: {platforms.length}</li>
        <li>Products: {products.length}</li>
        <li>Marketing Tasks: {tasks.length}</li>
        <li>Completed Tasks: {completedTasks}</li>
      </ul>
    </Card>
  );
}

export default DashboardSummary;
