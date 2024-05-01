import React, { useState, useEffect } from "react";
import "./UpdateForm.css";

function UpdateProductsRatingModal({ isOpen, onClose, product_rating }) {

  const [ID, setProductID] = useState("");
  const [name, setProductName] = useState("");
  const [rating, setRating] = useState("");
  useEffect(() => {
    if (product_rating) {
      setProductID(product_rating.product_id);
      setProductName(product_rating.product_name);
      setRating(product_rating.rating);
    }
  }, [product_rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/updateProductRating/${product_rating.product_id}`, {
        method: 'POST',
        body: JSON.stringify({
            product_id: ID,
            product_name: name,
            rating: rating
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("product Updated!");
        window.location.href = 'http://localhost:3000/RateProduct';
      } else {
        console.error('Failed to update product in the database');
      }
    } catch (error) {
      console.error('Error updating product rating:', error);
    }
    if (document.getElementById("name").value !== "") {
        alert("Product Rating Updated Successfully!");
      }
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 style={{textAlign:'center'}}>Update Product Rating</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>ID:</label>
              <input
                type="number"
                id="ID"
                name="ID"
                value={ID}
                onChange={(e) => setProductID(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateProductsRatingModal;