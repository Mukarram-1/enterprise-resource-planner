import React from 'react';
import './customertable.css'; // Assume you have a CSS file with the styles provided below

function CustomerTable() {
  const customers = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      clientSince: '2020-01-01',
      email: 'john@example.com',
      address: '123 Main Street, City, Country'
    },
    {
      name: 'Abdullah Tahir',
      phone: '987-654-3210',
      clientSince: '2019-06-15',
      email: 'abdullah@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      name: 'Mukarram Ahmad',
      phone: '987-654-3210',
      clientSince: '2019-06-15',
      email: 'mukarram@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      name: 'Usman Ramzan',
      phone: '987-654-3210',
      clientSince: '2019-06-15',
      email: 'Usman@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      name: 'Noman Javed',
      phone: '987-654-3210',
      clientSince: '2019-06-15',
      email: 'nomijaved@example.com',
      address: '456 Elm Street, Town, Country'
    },
    {
      name: 'Noman Goraya',
      phone: '987-654-3210',
      clientSince: '2019-06-15',
      email: 'goraya@example.com',
      address: '456 Elm Street, Town, Country'
    }
  ];

  return (
    <div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Client Since</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.clientSince}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
