import React, { useState, useEffect } from "react";
import "./UpdateForm.css";

function UpdateEmployeeModal({ isOpen, onClose, employee }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setPhone(employee.phone);
      setEmail(employee.email);
      setAddress(employee.address);
    }
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/updateemployee/${employee.id}`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          phone,
          email,
          address
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("Employee Updated!");
        window.location.href = 'http://localhost:3000/employees';
      } else {
        console.error('Failed to update employee in the database');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
    if (document.getElementById("name").value !== "") {
        alert("Employee Updated Successfully!");
      }
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 style={{textAlign:'center'}}>Update Employee</h2>
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
              <label>Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} // Update phone state
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)} // Update address state
              ></textarea>
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateEmployeeModal;
