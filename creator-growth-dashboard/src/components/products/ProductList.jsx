import ProductCard from "./ProductCard";

function ProductList({ products, onEditProduct }) {
  return (
    <section>
      <h2>Digital Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEditProduct={onEditProduct}
        />
      ))}
    </section>
  );
}

export default ProductList;