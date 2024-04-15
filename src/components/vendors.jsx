import React from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
function Employees() {
  const customers = [
    {
      id: '1',
      name: 'Mukarram Traders',
      materials: 'Material 1, Material 2',
      orders: 'Order 1, Order 6',
      contact: '0123456789'
    },
    {
      id: '2',
      name: 'Abdullah Traders',
      materials: 'Material 1, Material 3',
      orders: 'Order 3, Order 4',
      contact: '0123456789'
    },
    {
      id: '3',
      name: 'Usman Traders',
      materials: 'Material 3, Material 6',
      orders: 'Order 2, Order 5',
      contact: '0123456789'
    },
    {
      id: '4',
      name: 'Nomi Pawa  Traders',
      materials: 'Material 10, Material 7',
      orders: 'Order 7, Order 10',
      contact: '0123456789'
    },
    {
      id: '5',
      name: 'Zain Traders',
      materials: 'Material 4, Material 6',
      orders: 'Order 12, Order 8',
      contact: '0123456789'
    },
    {
      id: '6',
      name: 'Goraya Traders',
      materials: 'Material 7',
      orders: 'Order 9, Order 11',
      contact: '0123456789'
    }
  ];

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <h2>Manage Venders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Materials</th>
              <th>Orders</th>
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
                <td>{customer.orders}</td>
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