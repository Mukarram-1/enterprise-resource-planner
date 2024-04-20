import React, { useState, useEffect } from "react";
import "./UpdateForm.css";

function UpdateVendorModal({ isOpen, onClose, vendor }) {

  const [name, setName] = useState("");
  const [materials, setMaterials] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (vendor) {
      setName(vendor.name);
      setMaterials(vendor.materials);
      setContact(vendor.contact);
    }
  }, [vendor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/updatevendor/${vendor.id}`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          materials,
          contact
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("Vendor Updated!");
        window.location.href = 'http://localhost:3000/vendors';
      } else {
        console.error('Failed to update vendor in the database');
      }
    } catch (error) {
      console.error('Error updating vendor:', error);
    }
    if (document.getElementById("name").value !== "") {
        alert("Vendor Updated Successfully!");
      }
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 style={{textAlign:'center'}}>Update Vendor</h2>
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
              <label>Materials:</label>
              <input
                type="text"
                id="materials"
                name="materials"
                value={materials}
                onChange={(e) => setMaterials(e.target.value)} // Update phone state
              />
            </div>
            <div className="form-group">
              <label>Contact:</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)} // Update email state
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateVendorModal;
