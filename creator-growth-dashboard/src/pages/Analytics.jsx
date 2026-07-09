import Card from "../components/common/Card";

function Analytics({ platforms, products, tasks }) {
  const totalFollowers = platforms.reduce(
    (total, platform) => total + Number(platform.followers),
    0
  );

  const monetizedPlatforms = platforms.filter(
    (platform) => platform.monetized
  ).length;

  const totalProductValue = products.reduce(
    (total, product) => total + Number(product.price),
    0
  );

  const completedTasks = tasks.filter((task) => task.completed).length;

  const taskProgress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

  return (
    <section>
      <h2>Analytics Dashboard</h2>
      <p>Track important business numbers for your creator dashboard.</p>

      <Card title="Audience Reach">
        <p>Total Followers: {totalFollowers}</p>
        <p>Monetized Platforms: {monetizedPlatforms}</p>
      </Card>

      <Card title="Product Revenue Potential">
        <p>Total Products: {products.length}</p>
        <p>Total Product Value: ${totalProductValue}</p>
      </Card>

      <Card title="Task Progress">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Progress: {taskProgress}%</p>
      </Card>

      <Card title="Simple Chart">
        <p>Platforms: {"█".repeat(platforms.length)}</p>
        <p>Products: {"█".repeat(products.length)}</p>
        <p>Tasks: {"█".repeat(tasks.length)}</p>
      </Card>
    </section>
  );
}

export default Analytics;