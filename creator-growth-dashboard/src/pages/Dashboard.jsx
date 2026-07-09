import DashboardSummary from "../components/dashboard/DashboardSummary";
import NotificationList from "../components/notifications/NotificationList";
import PlatformList from "../components/platforms/PlatformList";
import PlatformForm from "../components/platforms/PlatformForm";
import EditPlatformForm from "../components/platforms/EditPlatformForm";
import ProductForm from "../components/products/ProductForm";
import ProductSearch from "../components/products/ProductSearch";
import ProductList from "../components/products/ProductList";
import EditProductForm from "../components/products/EditProductForm";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

function Dashboard({
  platforms,
  products,
  tasks,
  platformBeingEdited,
  productBeingEdited,
  searchTerm,
  onSearchChange,
  onAddTask,
  onAddProduct,
  onUpdateProduct,
  onCancelProductEdit,
  onEditProduct,
  onDeleteProduct,
  onToggleTaskComplete,
  onDeletePlatform,
  onEditPlatform,
  onUpdatePlatform,
  onCancelEdit,
}) {
  return (
    <>
      <DashboardSummary platforms={platforms} products={products} tasks={tasks} />

      <NotificationList tasks={tasks} products={products} />

      {productBeingEdited ? (
        <EditProductForm
          product={productBeingEdited}
          onUpdateProduct={onUpdateProduct}
          onCancelEdit={onCancelProductEdit}
        />
      ) : (
        <ProductForm onAddProduct={onAddProduct} />
      )}

      <ProductSearch searchTerm={searchTerm} onSearchChange={onSearchChange} />

      <ProductList
        products={products}
        onEditProduct={onEditProduct}
        onDeleteProduct={onDeleteProduct}
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
      <TaskList tasks={tasks} onToggleTaskComplete={onToggleTaskComplete} />
    </>
  );
}

export default Dashboard;