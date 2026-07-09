function ProductCard({ product }) {
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
    </article>
  );
}

export default ProductCard;