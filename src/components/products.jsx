import React from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";

function Products() {
  const customers = [
    {
      id: '1',
      name: 'Product 1',
      requirements: 'Material 1, Material 2',
      vendors: 'Mukarram Traders',
      cost: '$100'
    },
    {
      id: '2',
      name: 'Product 2',
      requirements: 'Material 1, Material 3',
      vendors: 'Abdullah Traders',
      cost: '$100'
    },
    {
      id: '3',
      name: 'Product 3',
      requirements: 'Material 3, Material 6',
      vendors: 'Usman Traders',
      cost: '$100'
    },
    {
      id: '4',
      name: 'Product 4',
      requirements: 'Material 2, Material 5',
      vendors: 'Nomi Pawa Traders',
      cost: '$100'
    },
    {
      id: '5',
      name: 'Product 5',
      requirements: 'Material 4, Material 6',
      vendors: 'Zain Traders',
      cost: '$100'
    },
    {
      id: '6',
      name: 'Product 6',
      requirements: 'Material 7',
      vendors: 'Goraya Traders',
      cost: '$100'
    }
  ];

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <h2>Manage Products</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Required Materials</th>
              <th>Vendors</th>
              <th>Estimated Cost</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;