import React, { useState, useEffect } from "react";
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import VendorModalForm from "./vendormodalform";

function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch("http://localhost:4000/getVendors");
        if (!response.ok) {
          throw new Error("Failed to fetch vendors");
        }
        const data = await response.json();
        setVendors(data);
        console.log("Data Read:", data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/deletevendor/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setVendors((prevVendors) => prevVendors.filter((vendor) => vendor.id !== id));
      } else {
        console.error('Failed to delete vendor from the database');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };


  return (
    <div>
      <Sidebar />
      <div className='main'>
        <div className="manageheading">
          <h2>Manage Vendors</h2>
          <div className="modalbtn">
            <button onClick={openModal}>Add Vendor</button>
            <VendorModalForm isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Materials</th>
              <th>Contact</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index}>
                <td>{vendor.id}</td>
                <td>{vendor.name}</td>
                <td>{vendor.materials}</td>
                <td>{vendor.contact}</td>
                <td><Link><EditIcon style={{ fontSize: "20px" ,color:'green'}}/></Link></td>
                <td><Link><DeleteForeverIcon onClick={()=>handleDelete(vendor.id)} style={{ fontSize: "20px" ,color:'red'}}/></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vendors;