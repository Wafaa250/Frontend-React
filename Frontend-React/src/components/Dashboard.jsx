import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductDashboard() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productName.trim() === "" || price === "") return;

    const newProduct = {
      name: productName,
      price: price
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setPrice("");
  };

  const deleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  return (
    <div style={{ width: "500px", margin: "40px auto", textAlign: "center" }}>
      <h2>Product Dashboard</h2>

      <h3>Total Products: {products.length}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>

      <p>Characters: {productName.length}</p>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && (
        <div style={{ marginTop: "20px" }}>
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard name={product.name} price={product.price} />
              <button onClick={() => deleteProduct(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDashboard;