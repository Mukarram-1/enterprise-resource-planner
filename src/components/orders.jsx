import React from 'react';
import './table.css';
import Sidebar from "./DashBoardSidebar";

function Orders() {
  const orders = [
    {
      orderId: '1001',
      customerId: 'CUST-001',
      orderDate: '2024-04-09 09:00:00',
      orderStatus: 'Pending',
      totalAmount: '$150.00',
      shippingAddress: '123 Main St, City, State',
      paymentMethod: 'Credit Card',
      paymentStatus: 'Pending',
      deliveryDate: '2024-04-15',
      notes: '-'
    },
    {
      orderId: '1002',
      customerId: 'CUST-002',
      orderDate: '2024-04-10 11:30:00',
      orderStatus: 'Shipped',
      totalAmount: '$200.00',
      shippingAddress: '456 Elm St, Town, State',
      paymentMethod: 'PayPal',
      paymentStatus: 'Paid',
      deliveryDate: '2024-04-14',
      notes: 'Gift wrap'
    },
    {
      orderId: '1003',
      customerId: 'CUST-003',
      orderDate: '2024-04-11 14:45:00',
      orderStatus: 'Delivered',
      totalAmount: '$75.00',
      shippingAddress: '789 Oak St, Village, State',
      paymentMethod: 'Cash on Delivery',
      paymentStatus: 'Paid',
      deliveryDate: '2024-04-12',
      notes: 'Express shipping'
    },
    {
      orderId: '1004',
      customerId: 'CUST-004',
      orderDate: '2024-04-12 08:00:00',
      orderStatus: 'Pending',
      totalAmount: '$120.00',
      shippingAddress: '890 Pine St, Town, State',
      paymentMethod: 'Credit Card',
      paymentStatus: 'Pending',
      deliveryDate: '2024-04-17',
      notes: 'Rush delivery'
    },
    {
      orderId: '1005',
      customerId: 'CUST-005',
      orderDate: '2024-04-13 10:15:00',
      orderStatus: 'Processing',
      totalAmount: '$90.00',
      shippingAddress: '567 Oak St, City, State',
      paymentMethod: 'PayPal',
      paymentStatus: 'Paid',
      deliveryDate: '2024-04-16',
      notes: '-'
    },
    {
      orderId: '1006',
      customerId: 'CUST-006',
      orderDate: '2024-04-14 12:30:00',
      orderStatus: 'Shipped',
      totalAmount: '$180.00',
      shippingAddress: '345 Maple St, Village, State',
      paymentMethod: 'Credit Card',
      paymentStatus: 'Paid',
      deliveryDate: '2024-04-18',
      notes: 'Fragile items'
    },
    {
      orderId: '1007',
      customerId: 'CUST-007',
      orderDate: '2024-04-15 15:45:00',
      orderStatus: 'Pending',
      totalAmount: '$250.00',
      shippingAddress: '678 Elm St, Town, State',
      paymentMethod: 'Cash on Delivery',
      paymentStatus: 'Pending',
      deliveryDate: '2024-04-19',
      notes: 'Signature required'
    }
  ];  

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <h2>Manage Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Total Amount</th>
              <th>Shipping Address</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Delivery Date</th>
              <th>Notes/Comments</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.customerId}</td>
                <td>{order.orderDate}</td>
                <td>{order.orderStatus}</td>
                <td>{order.totalAmount}</td>
                <td>{order.shippingAddress}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.deliveryDate}</td>
                <td>{order.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;