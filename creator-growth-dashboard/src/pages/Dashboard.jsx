import DashboardSummary from "../components/dashboard/DashboardSummary";
import NotificationList from "../components/notifications/NotificationList";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

function Dashboard({
  platforms,
  products,
  tasks,
  onAddTask,
  onToggleTaskComplete,
}) {
  return (
    <section>
      <header>
        <h1>Business Dashboard</h1>

        <p>
          Review the most important areas of your creator business from one
          centralized overview.
        </p>

        <p>
          Monitor business performance, review active alerts, and keep
          marketing responsibilities organized without mixing detailed product
          or social media management into the same workspace.
        </p>
      </header>

      <section>
        <h2>Business Overview</h2>

        <p>
          Review platform activity, product totals, and marketing progress at a
          glance.
        </p>

        <DashboardSummary
          platforms={platforms}
          products={products}
          tasks={tasks}
        />
      </section>

      <section>
        <h2>Current Alerts</h2>

        <p>
          Stay informed about incomplete tasks and products that may still
          require attention.
        </p>

        <NotificationList
          tasks={tasks}
          products={products}
        />
      </section>

      <section>
        <h2>Marketing Task Management</h2>

        <p>
          Organize responsibilities, assign priorities, and monitor progress as
          marketing work is completed.
        </p>

        <TaskForm onAddTask={onAddTask} />

        <TaskList
          tasks={tasks}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      </section>
    </section>
  );
}

export default Dashboard;
