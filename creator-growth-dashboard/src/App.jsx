import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DashboardSummary from "./components/dashboard/DashboardSummary";
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
      </main>

      <Footer />
    </>
  );
}

export default App;