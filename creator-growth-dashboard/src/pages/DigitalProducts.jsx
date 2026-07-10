import ProductForm from "../components/products/ProductForm";
import ProductSearch from "../components/products/ProductSearch";
import ProductList from "../components/products/ProductList";
import EditProductForm from "../components/products/EditProductForm";

function DigitalProducts({
  products,
  productBeingEdited,
  searchTerm,
  onSearchChange,
  onAddProduct,
  onEditProduct,
  onUpdateProduct,
  onDeleteProduct,
  onCancelProductEdit,
}) {
  return (
    <section>
      <header>
        <h1>Digital Product Management</h1>

        <p>
          Organize, manage, and monitor the digital products that support your
          creator business.
        </p>

        <p>
          Maintain a centralized product catalog, quickly locate products, and
          keep product information current as your business grows.
        </p>
      </header>

      <section>
        <h2>
          {productBeingEdited
            ? "Update Product"
            : "Add New Product"}
        </h2>

        {productBeingEdited ? (
          <EditProductForm
            product={productBeingEdited}
            onUpdateProduct={onUpdateProduct}
            onCancelEdit={onCancelProductEdit}
          />
        ) : (
          <ProductForm onAddProduct={onAddProduct} />
        )}
      </section>

      <section>
        <h2>Search Products</h2>

        <ProductSearch
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
        />
      </section>

      <section>
        <h2>Product Library</h2>

        <ProductList
          products={products}
          onEditProduct={onEditProduct}
          onDeleteProduct={onDeleteProduct}
        />
      </section>
    </section>
  );
}

export default DigitalProducts;