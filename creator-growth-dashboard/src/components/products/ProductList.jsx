import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <section>
      <h2>Digital Products</h2>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;