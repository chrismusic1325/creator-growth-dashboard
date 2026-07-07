import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DashboardSummary from "./components/dashboard/DashboardSummary";
import PlatformList from "./components/platforms/PlatformList";
import PlatformForm from "./components/platforms/PlatformForm";
import EditPlatformForm from "./components/platforms/EditPlatformForm";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";
import {
  platforms as starterPlatforms,
  products,
  tasks as starterTasks,
} from "./data/mockData";
import "./App.css";

function App() {
  const [platforms, setPlatforms] = useState(starterPlatforms);
  const [tasks, setTasks] = useState(starterTasks);
  const [platformBeingEdited, setPlatformBeingEdited] = useState(null);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deletePlatform(platformId) {
    setPlatforms(platforms.filter((platform) => platform.id !== platformId));
  }

  function startEditingPlatform(platform) {
    setPlatformBeingEdited(platform);
  }

  function updatePlatform(updatedPlatform) {
    setPlatforms(
      platforms.map((platform) =>
        platform.id === updatedPlatform.id ? updatedPlatform : platform
      )
    );

    setPlatformBeingEdited(null);
  }

  function cancelEdit() {
    setPlatformBeingEdited(null);
  }

  return (
    <>
      <Header />

      <main>
        <DashboardSummary
          platforms={platforms}
          products={products}
          tasks={tasks}
        />

        {platformBeingEdited ? (
          <EditPlatformForm
            platform={platformBeingEdited}
            onUpdatePlatform={updatePlatform}
            onCancelEdit={cancelEdit}
          />
        ) : (
          <PlatformForm />
        )}

        <PlatformList
          platforms={platforms}
          onDeletePlatform={deletePlatform}
          onEditPlatform={startEditingPlatform}
        />

        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </main>

      <Footer />
    </>
  );
}

export default App;