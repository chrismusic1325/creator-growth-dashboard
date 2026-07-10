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
    <section>
      <header>
        <h1>Business Dashboard</h1>

        <p>
          Manage the most important areas of your creator business from one
          centralized workspace.
        </p>

        <p>
          Review business performance, monitor active alerts, organize digital
          products, manage social media platforms, and keep marketing work on
          track.
        </p>
      </header>

      <section>
        <h2>Business Overview</h2>

        <p>
          Review current platform activity, product totals, and marketing task
          progress at a glance.
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
          Stay informed about incomplete tasks and products that still require
          attention.
        </p>

        <NotificationList tasks={tasks} products={products} />
      </section>

      <section>
        <h2>Digital Product Management</h2>

        <p>
          Add, update, search, and organize the products offered through your
          creator business.
        </p>

        {productBeingEdited ? (
          <EditProductForm
            product={productBeingEdited}
            onUpdateProduct={onUpdateProduct}
            onCancelEdit={onCancelProductEdit}
          />
        ) : (
          <ProductForm onAddProduct={onAddProduct} />
        )}

        <ProductSearch
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
        />

        <ProductList
          products={products}
          onEditProduct={onEditProduct}
          onDeleteProduct={onDeleteProduct}
        />
      </section>

      <section>
        <h2>Social Media Management</h2>

        <p>
          Maintain an organized record of your platforms, account details,
          audience size, activity status, and monetization progress.
        </p>

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
      </section>

      <section>
        <h2>Marketing Task Management</h2>

        <p>
          Organize responsibilities, assign priorities, and monitor progress as
          marketing work is completed.
        </p>

        <TaskForm onAddTask={onAddTask} />

        <TaskList
          tasks={tasks}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      </section>
    </section>
  );
}

export default Dashboard;