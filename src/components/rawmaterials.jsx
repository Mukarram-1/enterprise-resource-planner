import React, { useState, useEffect } from "react";
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import OrderRawMaterialsModalForm from "./orderRawMaterialsModalform";

function RawMaterials() {
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
          <div className="modalbtn">
            <button onClick={openModal}>Order Raw Materials</button>
            <OrderRawMaterialsModalForm isOpen={isModalOpen} onClose={closeModal} />
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
                {/* <td><Link><EditIcon style={{ fontSize: "20px" ,color:'green'}}/></Link></td>
                <td><Link><DeleteForeverIcon style={{ fontSize: "20px" ,color:'red'}}/></Link></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RawMaterials;