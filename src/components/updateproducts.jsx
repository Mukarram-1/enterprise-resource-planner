import React, { useState, useEffect } from "react";
import "./UpdateForm.css";

function UpdateProductsModal({ isOpen, onClose, product }) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setQuantity(product.quantity);
      setCost(product.cost);
      setCategory(product.category);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/updateproduct/${product.id}`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          quantity,
          cost,
          category
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("product Updated!");
        window.location.href = 'http://localhost:3000/products';
      } else {
        console.error('Failed to update product in the database');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
    if (document.getElementById("name").value !== "") {
        alert("Product Updated Successfully!");
      }
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 style={{textAlign:'center'}}>Update Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
              />
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} // Update phone state
              />
            </div>
            <div className="form-group">
              <label>Cost:</label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)} // Update email state
              />
            </div>
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)} // Update address state
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateProductsModal;
