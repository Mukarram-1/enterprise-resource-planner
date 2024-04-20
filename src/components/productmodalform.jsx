import React, { useState } from 'react';
import './ModalForm.css'; 

const ProductModalForm = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    if (document.getElementById("name").value !== "") {
      alert("New Product Added");
    }

  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit} action="http://localhost:4000/addproduct" method="post">
          <div className="form-group">
          <div className="form-group">
            <h2 style={{textAlign:'center'}}>Add New Product</h2>
          </div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Cost:</label>
            <input
              type="number"
              id="cost"
              name="cost"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductModalForm;
