import React from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";

function Employees() {
  const customers = [
    {
      id: '1',
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      address: '123 Main Street, City, Country'
    },
    {
      id: '2',
      name: 'Abdullah Tahir',
      phone: '987-654-3210',
      email: 'abdullah@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      id: '3',
      name: 'Mukarram Ahmad',
      phone: '987-654-3210',
      email: 'mukarram@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      id: '4',
      name: 'Usman Ramzan',
      phone: '987-654-3210',
      email: 'Usman@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      id: '5',
      name: 'Noman Javed',
      phone: '987-654-3210',
      email: 'nomijaved@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      id: '6',
      name: 'Noman Goraya',
      phone: '987-654-3210',
      email: 'goraya@example.com',
      address: '456 Elm Street, Town, Country'
    }
  ];

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <h2>Manage Employees</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;