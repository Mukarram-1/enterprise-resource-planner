import React from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

function Inventory() {
  const items = [
        { code: '001', name: 'Widget A', quantity: 100, reorderLevel: 20, cost: '$5.00', value: '$500.00', lastUpdated: '2024-04-09 09:00:00' },
        { code: '002', name: 'Widget B', quantity: 75, reorderLevel: 30, cost: '$7.50', value: '$562.50', lastUpdated: '2024-04-08 15:30:00' },
        { code: '003', name: 'Widget C', quantity: 50, reorderLevel: 15, cost: '$10.00', value: '$500.00', lastUpdated: '2024-04-07 10:45:00' },
        { code: '004', name: 'Widget D', quantity: 200, reorderLevel: 25, cost: '$4.50', value: '$900.00', lastUpdated: '2024-04-10 11:20:00' },
        { code: '005', name: 'Widget E', quantity: 80, reorderLevel: 10, cost: '$12.00', value: '$960.00', lastUpdated: '2024-04-11 14:50:00' },
        { code: '006', name: 'Widget F', quantity: 150, reorderLevel: 50, cost: '$6.50', value: '$975.00', lastUpdated: '2024-04-12 08:30:00' },
        { code: '007', name: 'Widget G', quantity: 120, reorderLevel: 40, cost: '$8.00', value: '$960.00', lastUpdated: '2024-04-13 16:15:00' },  
    ];

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <h2>Manage Inventory</h2>
        <table className="table">
          <thead>
             <tr>
                <th>Item Code</th>
                <th>Item Name</th>
                <th>Quantity on Hand</th>
                <th>Reorder Level</th>
                <th>Unit Cost</th>
                <th>Total Value</th>
                <th>Last Updated</th>
                <th></th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.reorderLevel}</td>
                <td>{item.cost}</td>
                <td>{item.value}</td>
                <td>{item.lastUpdated}</td>
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

export default Inventory;