import React, { useState } from 'react';
import './ModalForm.css'; 

const OrderRawMaterialsModalForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    materials: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example: send formData to an API
    console.log(formData);
    // Close the modal after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <div className="form-group">
            <h2 style={{textAlign:'center'}}>Order Raw Materials</h2>
          </div>
            <label htmlFor="name">Vendor:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reqMaterial">Materials:</label>
            <input
              type="text"
              id="reqMaterial"
              name="reqMaterial"
              value={formData.reqMaterial}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OrderRawMaterialsModalForm;