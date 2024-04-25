import React, { useState, useEffect } from 'react';
import './ModalForm.css';

const OrderRawMaterialsModalForm = ({ isOpen, onClose }) => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState('');
  const [materials, setMaterials] = useState([]);
  const [cost, setCost] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchVendorNames = async () => {
      try {
        const response = await fetch('http://localhost:4000/getVendors');
        if (response.ok) {
          const data = await response.json();
          const names = data.map(vendor => vendor.name);
          setVendors(names);
          console.log("Vendor data", data);
        } else {
          console.error('Failed to fetch vendors names');
        }
      } catch (error) {
        console.error('Error fetching vendors names:', error);
      }
    };
    fetchVendorNames();
  }, []);

  useEffect(() => {
    const fetchMaterials = async () => {
      if (selectedVendor) {
        try {
          const response = await fetch(`http://localhost:4000/getMaterials/${selectedVendor}`);
          if (response.ok) {
            const data2 = await response.json();
            console.log("Data received for materials: ", data2);
            const materialnames = data2.map(material => material.materials);
            const costs = data2.map(material => material.unitcost); // Changed to costs
            setMaterials(materialnames);
            setCost(costs[0]); // Set cost to the first unit cost
          } else {
            console.error('Failed to fetch materials');
          }
        } catch (error) {
          console.error('Error fetching materials:', error);
        }
      }
    };
    fetchMaterials();
  }, [selectedVendor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (selectedVendor !== "" && quantity > 0) {
      try {
        const response = await fetch("http://localhost:4000/addRawMaterial", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            vendor: selectedVendor,
            material: document.getElementById("reqMaterial").value,
            unitcost: cost,
            quantity: quantity,
            totalcost: cost * quantity
          })
        });

        if (response.ok) {
          console.log("Raw Material Added Successfully!");
          // Additional logic if needed after successful submission
          alert("Raw Material Added Successfully!")
          window.location.href = '/rawmaterials';
        } else {
          console.error("Failed to add raw material");
        }
      } catch (error) {
        console.error("Error adding raw material:", error);
      }
    } else {
      console.log("Please select a vendor and provide a valid quantity.");
    }
  };
  
  const handleVendorChange = (e) => {
    setSelectedVendor(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group">
              <h2 style={{ textAlign: 'center' }}>Order Raw Materials</h2>
            </div>
            <label htmlFor="vendor">Vendor:</label>
            <select
              id="vendor"
              name="vendor"
              value={selectedVendor}
              onChange={handleVendorChange}
            >
              <option value="">Select Vendor...</option>
              {vendors.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
          </div>
          {selectedVendor && materials && materials.length > 0 && (
            <div className="form-group">
              <label htmlFor="reqMaterial">Materials:</label>
              <select id="reqMaterial" name="reqMaterial">
                <option value="">Select Material...</option>
                {materials.map((material, index) => (
                  <option key={index} value={material}>{material}</option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="unitcost">Unit Cost:</label>
            <input
              type="number"
              id="unitcost"
              name="unitcost"
              value={cost}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalcost">Total Cost:</label>
            <input
              type="number"
              id="totalcost"
              name="totalcost"
              value={cost * quantity}
              readOnly
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OrderRawMaterialsModalForm;
