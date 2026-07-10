import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import SocialMedia from "./pages/SocialMedia";
import Analytics from "./pages/Analytics";
import CalendarPage from "./pages/Calendar";
import {
  platforms as starterPlatforms,
  products as starterProducts,
  tasks as starterTasks,
} from "./data/mockData";
import "./App.css";

function App() {
  const [platforms, setPlatforms] = useState(starterPlatforms);
  const [products, setProducts] = useState(starterProducts);
  const [tasks, setTasks] = useState(starterTasks);
  const [platformBeingEdited, setPlatformBeingEdited] = useState(null);
  const [productBeingEdited, setProductBeingEdited] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function addPlatform(newPlatform) {
    setPlatforms((currentPlatforms) => [
      ...currentPlatforms,
      newPlatform,
    ]);
  }

  function deletePlatform(platformId) {
    setPlatforms((currentPlatforms) =>
      currentPlatforms.filter((platform) => platform.id !== platformId)
    );
  }

  function startEditingPlatform(platform) {
    setPlatformBeingEdited(platform);
  }

  function updatePlatform(updatedPlatform) {
    setPlatforms((currentPlatforms) =>
      currentPlatforms.map((platform) =>
        platform.id === updatedPlatform.id ? updatedPlatform : platform
      )
    );

    setPlatformBeingEdited(null);
  }

  function cancelEdit() {
    setPlatformBeingEdited(null);
  }

  function addProduct(newProduct) {
    setProducts((currentProducts) => [
      ...currentProducts,
      newProduct,
    ]);
  }

  function deleteProduct(productId) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  }

  function startEditingProduct(product) {
    setProductBeingEdited(product);
  }

  function updateProduct(updatedProduct) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    setProductBeingEdited(null);
  }

  function cancelProductEdit() {
    setProductBeingEdited(null);
  }

  function addTask(newTask) {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function toggleTaskComplete(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <>
      <Header />
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <Dashboard
                platforms={platforms}
                products={filteredProducts}
                tasks={tasks}
                productBeingEdited={productBeingEdited}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onAddProduct={addProduct}
                onUpdateProduct={updateProduct}
                onCancelProductEdit={cancelProductEdit}
                onEditProduct={startEditingProduct}
                onDeleteProduct={deleteProduct}
                onAddTask={addTask}
                onToggleTaskComplete={toggleTaskComplete}
              />
            }
          />

          <Route
            path="/social-media"
            element={
              <SocialMedia
                platforms={platforms}
                platformBeingEdited={platformBeingEdited}
                onAddPlatform={addPlatform}
                onDeletePlatform={deletePlatform}
                onEditPlatform={startEditingPlatform}
                onUpdatePlatform={updatePlatform}
                onCancelEdit={cancelEdit}
              />
            }
          />

          <Route
            path="/analytics"
            element={
              <Analytics
                platforms={platforms}
                products={products}
                tasks={tasks}
              />
            }
          />

          <Route
            path="/calendar"
            element={<CalendarPage tasks={tasks} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;