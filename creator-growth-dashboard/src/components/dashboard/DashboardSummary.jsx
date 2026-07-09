import Card from "../common/Card";

function DashboardSummary({ platforms, products, tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const taskProgress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

  const totalProductValue = products.reduce(
    (total, product) => total + Number(product.price),
    0
  );

  return (
    <section>
      <h2>Dashboard Summary</h2>

      <Card title="Platform Overview">
        <p>Total Platforms: {platforms.length}</p>
      </Card>

      <Card title="Product Overview">
        <p>Total Products: {products.length}</p>
        <p>Total Product Value: ${totalProductValue}</p>
      </Card>

      <Card title="Task Progress">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Pending Tasks: {pendingTasks}</p>
        <p>Progress: {taskProgress}%</p>
      </Card>
    </section>
  );
}

export default DashboardSummary;