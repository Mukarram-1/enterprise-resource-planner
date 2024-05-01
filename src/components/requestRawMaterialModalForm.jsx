import React, { useState,useEffect } from "react";

function RequestRawMaterialsModalForm({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchRawMaterialNames = async () => {
      try {
        const response = await fetch('http://localhost:4000/getRawMaterials');
        if (response.ok) {
          const data = await response.json();
          const names = data.map(rawmaterial => rawmaterial.name);
          setSelectedMaterial(names);
          console.log("Vendor data", data);
        } else {
          console.error('Failed to fetch vendors names');
        }
      } catch (error) {
        console.error('Error fetching vendors names:', error);
      }
    };
    fetchRawMaterialNames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/requestRawMaterials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          quantity,
          description
        })
      });
      if (response.ok) {
        console.log("Raw material requested successfully!");
        onClose();
      } else {
        console.error("Failed to request raw material");
      }
    } catch (error) {
      console.error("Error requesting raw material:", error);
    }
  };

  const handleRawMaterialNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 style={{ textAlign: 'center' }}>Request Raw Material</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Raw Material Name:</label>
              <select
              id="name"
              name="name"
              value={name}
              onChange={handleRawMaterialNameChange}
            >
              <option value="">Select Raw Material...</option>
              {selectedMaterial.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Request</button>
          </form>
        </div>
      </div>
    )
  );
}

export default RequestRawMaterialsModalForm;
