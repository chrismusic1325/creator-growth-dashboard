function ProductCard({ product, onEditProduct }) {
  return (
    <article>
      <h3>{product.name}</h3>

      <p>
        <strong>Type:</strong> {product.type}
      </p>

      <p>
        <strong>Platform:</strong> {product.platform}
      </p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Status:</strong> {product.status}
      </p>

      <button onClick={() => onEditProduct(product)}>
        Edit
      </button>
    </article>
  );
}

export default ProductCard;