import ProductCard from "./ProductCard";

function ProductList({ products, onEditProduct, onDeleteProduct }) {
  return (
    <section>
      <h2>Digital Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEditProduct={onEditProduct}
          onDeleteProduct={onDeleteProduct}
        />
      ))}
    </section>
  );
}

export default ProductList;