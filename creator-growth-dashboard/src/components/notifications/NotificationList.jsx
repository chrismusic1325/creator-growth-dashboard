function NotificationList({ tasks, products }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const draftProducts = products.filter((product) => product.status === "Draft");

  return (
    <section>
      <h2>Notifications</h2>

      {incompleteTasks.length === 0 && draftProducts.length === 0 ? (
        <p>No notifications right now.</p>
      ) : (
        <ul>
          <li>You have {incompleteTasks.length} incomplete task(s).</li>
          <li>You have {draftProducts.length} draft product(s).</li>
        </ul>
      )}
    </section>
  );
}

export default NotificationList;