import React, { useState } from 'react';
import './ModalForm.css';

const ModalForm = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {

    if (document.getElementById("name").value !== "") {
      alert("Employee Added");
    }

  };
  if (!isOpen) return null;

  return (

    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit} action="http://localhost:4000/addemployee" method="post">
          <div className="form-group">
            <h2 style={{ textAlign: 'center' }}>Add Employee</h2>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;