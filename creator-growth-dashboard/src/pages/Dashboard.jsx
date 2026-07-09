import DashboardSummary from "../components/dashboard/DashboardSummary";
import PlatformList from "../components/platforms/PlatformList";
import PlatformForm from "../components/platforms/PlatformForm";
import EditPlatformForm from "../components/platforms/EditPlatformForm";
import ProductForm from "../components/products/ProductForm";
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

      {productBeingEdited ? (
        <EditProductForm
          product={productBeingEdited}
          onUpdateProduct={onUpdateProduct}
          onCancelEdit={onCancelProductEdit}
        />
      ) : (
        <ProductForm onAddProduct={onAddProduct} />
      )}

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