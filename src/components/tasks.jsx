import React from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
function Tasks() {
  const customers = [
    {
      id: '1',
      name: 'Task 1',
      requirements: 'Material 1, Material 2',
      vendors: 'Mukarram Traders',
      cost: '$100'
    },
    {
      id: '2',
      name: 'Task 2',
      requirements: 'Material 1, Material 3',
      vendors: 'Abdullah Traders',
      cost: '$100'
    },
    {
      id: '3',
      name: 'Task 3',
      requirements: 'Material 3, Material 6',
      vendors: 'Usman Traders',
      cost: '$100'
    },
    {
      id: '4',
      name: 'Task 4',
      requirements: 'Material 2, Material 5',
      vendors: 'Nomi Pawa Traders',
      cost: '$100'
    },
    {
      id: '5',
      name: 'Task 5',
      requirements: 'Material 4, Material 6',
      vendors: 'Zain Traders',
      cost: '$100'
    },
    {
      id: '6',
      name: 'Task 6',
      requirements: 'Material 7',
      vendors: 'Goraya Traders',
      cost: '$100'
    }
  ];

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <h2>Manage Tasks</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Required Materials</th>
              <th>Vendors</th>
              <th>Estimated Cost</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.requirements}</td>
                <td>{customer.vendors}</td>
                <td>{customer.cost}</td>
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

export default Tasks;