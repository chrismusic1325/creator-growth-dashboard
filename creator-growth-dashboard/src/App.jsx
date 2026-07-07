import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DashboardSummary from "./components/dashboard/DashboardSummary";
import PlatformList from "./components/platforms/PlatformList";
import PlatformForm from "./components/platforms/PlatformForm";
import EditPlatformForm from "./components/platforms/EditPlatformForm";
import { platforms as starterPlatforms, products, tasks } from "./data/mockData";
import "./App.css";

function App() {
  const [platforms, setPlatforms] = useState(starterPlatforms);
  const [platformBeingEdited, setPlatformBeingEdited] = useState(null);

  function deletePlatform(platformId) {
    const updatedPlatforms = platforms.filter(
      (platform) => platform.id !== platformId
    );

    setPlatforms(updatedPlatforms);
  }

  function startEditingPlatform(platform) {
    setPlatformBeingEdited(platform);
  }

  function updatePlatform(updatedPlatform) {
    const updatedPlatforms = platforms.map((platform) =>
      platform.id === updatedPlatform.id ? updatedPlatform : platform
    );

    setPlatforms(updatedPlatforms);
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
      </main>

      <Footer />
    </>
  );
}

export default App;