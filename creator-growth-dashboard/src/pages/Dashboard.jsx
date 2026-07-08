import DashboardSummary from "../components/dashboard/DashboardSummary";
import PlatformList from "../components/platforms/PlatformList";
import PlatformForm from "../components/platforms/PlatformForm";
import EditPlatformForm from "../components/platforms/EditPlatformForm";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

function Dashboard({
  platforms,
  products,
  tasks,
  platformBeingEdited,
  onAddTask,
  onToggleTaskComplete,
  onDeletePlatform,
  onEditPlatform,
  onUpdatePlatform,
  onCancelEdit,
}) {
  return (
    <>
      <DashboardSummary
        platforms={platforms}
        products={products}
        tasks={tasks}
      />

      {platformBeingEdited ? (
        <EditPlatformForm
          platform={platformBeingEdited}
          onUpdatePlatform={onUpdatePlatform}
          onCancelEdit={onCancelEdit}
        />
      ) : (
        <PlatformForm />
      )}

      <PlatformList
        platforms={platforms}
        onDeletePlatform={onDeletePlatform}
        onEditPlatform={onEditPlatform}
      />

      <TaskForm onAddTask={onAddTask} />

      <TaskList
        tasks={tasks}
        onToggleTaskComplete={onToggleTaskComplete}
      />
    </>
  );
}

export default Dashboard;