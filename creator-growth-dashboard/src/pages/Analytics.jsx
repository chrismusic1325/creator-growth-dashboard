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

  const liveProducts = products.filter(
    (product) => product.status === "Live"
  ).length;

  const draftProducts = products.filter(
    (product) => product.status === "Draft"
  ).length;

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const taskProgress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  return (
    <section>
      <header>
        <h1>Business Analytics</h1>

        <p>
          Review key performance information across your audience, digital
          products, and marketing activity.
        </p>

        <p>
          These insights provide a clear snapshot of current business progress
          and highlight areas that may need additional attention.
        </p>
      </header>

      <Card title="Audience Overview">
        <p>
          Track the combined reach of your connected social media platforms and
          review how many accounts are currently monetized.
        </p>

        <p>
          <strong>Total Platforms:</strong> {platforms.length}
        </p>

        <p>
          <strong>Total Followers:</strong> {totalFollowers.toLocaleString()}
        </p>

        <p>
          <strong>Monetized Platforms:</strong> {monetizedPlatforms}
        </p>
      </Card>

      <Card title="Product Portfolio">
        <p>
          Review the size, value, and publishing status of your current digital
          product collection.
        </p>

        <p>
          <strong>Total Products:</strong> {products.length}
        </p>

        <p>
          <strong>Live Products:</strong> {liveProducts}
        </p>

        <p>
          <strong>Draft Products:</strong> {draftProducts}
        </p>

        <p>
          <strong>Total Listed Product Value:</strong> ${totalProductValue}
        </p>
      </Card>

      <Card title="Marketing Performance">
        <p>
          Monitor your current workload and measure progress across active
          marketing responsibilities.
        </p>

        <p>
          <strong>Total Tasks:</strong> {tasks.length}
        </p>

        <p>
          <strong>Completed Tasks:</strong> {completedTasks}
        </p>

        <p>
          <strong>Pending Tasks:</strong> {pendingTasks}
        </p>

        <p>
          <strong>Completion Rate:</strong> {taskProgress}%
        </p>
      </Card>

      <Card title="Business Activity Overview">
        <p>
          This overview provides a quick comparison of the main areas currently
          being managed within the dashboard.
        </p>

        <p>
          <strong>Platforms:</strong> {"█".repeat(platforms.length)}
        </p>

        <p>
          <strong>Products:</strong> {"█".repeat(products.length)}
        </p>

        <p>
          <strong>Marketing Tasks:</strong> {"█".repeat(tasks.length)}
        </p>
      </Card>
    </section>
  );
}

export default Analytics;