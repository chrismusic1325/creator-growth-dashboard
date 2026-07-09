import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
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

  function addProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function deleteProduct(productId) {
    setProducts(products.filter((product) => product.id !== productId));
  }

  function startEditingProduct(product) {
    setProductBeingEdited(product);
  }

  function updateProduct(updatedProduct) {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    setProductBeingEdited(null);
  }

  function cancelProductEdit() {
    setProductBeingEdited(null);
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function toggleTaskComplete(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
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
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <Dashboard
                platforms={platforms}
                products={products}
                tasks={tasks}
                platformBeingEdited={platformBeingEdited}
                productBeingEdited={productBeingEdited}
                onAddProduct={addProduct}
                onUpdateProduct={updateProduct}
                onCancelProductEdit={cancelProductEdit}
                onEditProduct={startEditingProduct}
                onDeleteProduct={deleteProduct}
                onAddTask={addTask}
                onToggleTaskComplete={toggleTaskComplete}
                onDeletePlatform={deletePlatform}
                onEditPlatform={startEditingPlatform}
                onUpdatePlatform={updatePlatform}
                onCancelEdit={cancelEdit}
              />
            }
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