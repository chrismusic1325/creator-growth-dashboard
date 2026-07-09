function ProductSearch({ searchTerm, onSearchChange }) {
  return (
    <section>
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search products by name"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </section>
  );
}

export default ProductSearch;