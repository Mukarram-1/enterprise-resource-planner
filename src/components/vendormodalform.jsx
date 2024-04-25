import React, { useState } from 'react';
import './ModalForm.css'; 

const VendorModalForm = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    if(document.getElementById("name").value!=="")
    {
      alert("Vendor Added");
    }
    // console.log("Vendor data send to backend");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit} action="http://localhost:4000/addvendors" method="post">
          <div className="form-group">
          <div className="form-group">
            <h2 style={{textAlign:'center'}}>Add New Vendor</h2>
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
            <label htmlFor="reqMaterial">Materials:</label>
            <input
              type="text"
              id="reqMaterial"
              name="reqMaterial"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="unitCost">Cost per unit:</label>
            <input
              type="number"
              id="unitCost"
              name="unitCost"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VendorModalForm;
