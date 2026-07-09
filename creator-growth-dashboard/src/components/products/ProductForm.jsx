import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Uploaded Product");
  const [platform, setPlatform] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Draft");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !platform || !price) {
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      type,
      platform,
      price: Number(price),
      status,
    };

    onAddProduct(newProduct);

    setName("");
    setType("Uploaded Product");
    setPlatform("");
    setPrice("");
    setStatus("Draft");
  }

  return (
    <section>
      <h2>Add Digital Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>Uploaded Product</option>
          <option>External Platform</option>
          <option>Template</option>
          <option>Course</option>
        </select>

        <input
          type="text"
          placeholder="Platform"
          value={platform}
          onChange={(event) => setPlatform(event.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option>Draft</option>
          <option>Live</option>
          <option>Paused</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default ProductForm;