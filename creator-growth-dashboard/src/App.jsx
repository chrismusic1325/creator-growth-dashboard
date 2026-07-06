import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DashboardSummary from "./components/dashboard/DashboardSummary";
import PlatformList from "./components/platforms/PlatformList";
import PlatformForm from "./components/platforms/PlatformForm";
import { platforms, products, tasks } from "./data/mockData";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <DashboardSummary
          platforms={platforms}
          products={products}
          tasks={tasks}
        />

        <PlatformForm />

        <PlatformList platforms={platforms} />
      </main>

      <Footer />
    </>
  );
}

export default App;