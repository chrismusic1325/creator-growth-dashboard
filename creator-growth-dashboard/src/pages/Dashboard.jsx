import { useRef, useState } from "react";
import DashboardSummary from "../components/dashboard/DashboardSummary";
import NotificationList from "../components/notifications/NotificationList";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import ViewportPreview from "../components/common/ViewportPreview";

function Dashboard({
  platforms,
  products,
  tasks,
  onAddTask,
  onToggleTaskComplete,
}) {
  const [viewport, setViewport] = useState("desktop");
  const dashboardPreviewRef = useRef(null);

  function handleViewportChange(selectedViewport) {
    setViewport(selectedViewport);

    window.requestAnimationFrame(() => {
      dashboardPreviewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      dashboardPreviewRef.current?.focus({
        preventScroll: true,
      });
    });
  }

  return (
    <section className="dashboard-page">
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

      <ViewportPreview
        viewport={viewport}
        onViewportChange={handleViewportChange}
      />

      <div className="dashboard-preview-stage">
        <div
          ref={dashboardPreviewRef}
          className={`dashboard-preview dashboard-preview-${viewport}`}
          tabIndex="-1"
          aria-label={`${viewport} dashboard preview`}
        >
          <section>
            <h2>Business Overview</h2>

            <p>
              Review platform activity, product totals, and marketing progress
              at a glance.
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
              Organize responsibilities, assign priorities, and monitor
              progress as marketing work is completed.
            </p>

            <TaskForm onAddTask={onAddTask} />

            <TaskList
              tasks={tasks}
              onToggleTaskComplete={onToggleTaskComplete}
            />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
