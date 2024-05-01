import React, { useState, useEffect } from "react";
import './table.css';
import { Link } from "react-router-dom";

import Sidebar from "./DashBoardSidebar";
import RequestRawMaterialsModalForm from "./requestRawMaterialModalForm";

function RequestRawMaterials() {
  const [rawMaterials, setRawMaterials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchRawMaterials = async () => {
      try {
        const response = await fetch("http://localhost:4000/getRawMaterials");
        if (!response.ok) {
          throw new Error("Failed to fetch raw materials");
        }
        const data = await response.json();
        setRawMaterials(data);
        console.log("Data Read:", data);
      } catch (error) {
        console.error("Error fetching raw materials:", error);
      }
    };

    fetchRawMaterials();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <div className="manageheading">
          <h2>Raw Material Analysis</h2>
          <div className="inner"
            style=
            {{
              display: 'flex',
              alignItems: 'center',
              gap:'10px'
            }}
          >
          <div 
            style=
            {{
              backgroundColor: '#1a16f3',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
            <Link to="/requestedOrders"><span>Manager Requests</span></Link>
          </div>
          <div className="modalbtn">
            <button onClick={openModal}>Request Raw Materials</button>
            <RequestRawMaterialsModalForm isOpen={isModalOpen} onClose={closeModal} />
          </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost Per Unit</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {rawMaterials.map((material, index) => (
              <tr key={index}>
                <td>{material.id}</td>
                <td>{material.name}</td>
                <td>{material.quantity}</td>
                <td>{material.cost}</td>
                <td>{material.totalcost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestRawMaterials;