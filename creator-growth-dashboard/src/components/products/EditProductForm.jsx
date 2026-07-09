import { useState } from "react";

function EditProductForm({ product, onUpdateProduct, onCancelEdit }) {
  const [name, setName] = useState(product.name);
  const [type, setType] = useState(product.type);
  const [platform, setPlatform] = useState(product.platform);
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(product.status);

  function handleSubmit(event) {
    event.preventDefault();

    const updatedProduct = {
      ...product,
      name,
      type,
      platform,
      price: Number(price),
      status,
    };

    onUpdateProduct(updatedProduct);
  }

  return (
    <section>
      <h2>Edit Digital Product</h2>

      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Uploaded Product</option>
          <option>External Platform</option>
          <option>Template</option>
          <option>Course</option>
        </select>

        <input value={platform} onChange={(e) => setPlatform(e.target.value)} />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Draft</option>
          <option>Live</option>
          <option>Paused</option>
        </select>

        <button type="submit">Save Product</button>
        <button type="button" onClick={onCancelEdit}>Cancel</button>
      </form>
    </section>
  );
}

export default EditProductForm;