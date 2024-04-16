import React, { useState } from "react";
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import VendorModalForm from "./vendormodalform";
function Employees() {
  const customers = [
    {
      id: '1',
      name: 'Mukarram Traders',
      materials: 'Material 1, Material 2',
      deliveryDate: '17-April-2024',
      contact: '0123456789'
    },
    {
      id: '2',
      name: 'Abdullah Traders',
      materials: 'Material 1, Material 3',
      deliveryDate: '17-April-2024',
      contact: '0123456789'
    },
    {
      id: '3',
      name: 'Usman Traders',
      materials: 'Material 3, Material 6',
      deliveryDate: '17-April-2024',
      contact: '0123456789'
    },
    {
      id: '4',
      name: 'Nomi Pawa  Traders',
      materials: 'Material 10, Material 7',
      deliveryDate: '17-April-2024',
      contact: '0123456789'
    },
    {
      id: '5',
      name: 'Zain Traders',
      materials: 'Material 4, Material 6',
      deliveryDate: '17-April-2024',
      contact: '0123456789'
    },
    {
      id: '6',
      name: 'Goraya Traders',
      materials: 'Material 7',
      deliveryDate: '17-April-2024',
      contact: '0123456789'
    }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.materials}</td>
                <td>{customer.contact}</td>
                <td><Link><EditIcon style={{ fontSize: "20px" ,color:'green'}}/></Link></td>
                <td><Link><DeleteForeverIcon style={{ fontSize: "20px" ,color:'red'}}/></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
  );
}

export default Employees;