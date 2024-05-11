import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const dummyData = [
  { id: 1, customerName: "John Doe", amount: 50, status: "Pending" },
  { id: 2, customerName: "Jane Smith", amount: 100, status: "Pending" },
  { id: 3, customerName: "Michael Johnson", amount: 75, status: "Pending" }
];

function ManageOrder() {
  const [orders, setOrders] = useState(dummyData);

  const handleStatusChange = (orderId, status) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
  <AdminNavbar>
      <div className="manage-order-container">
      <h2>Manage Orders</h2>
      {orders.map(order => (
        <div className="order-item" key={order.id}>
          <div className="order-details">
            <h3>Order ID: {order.id}</h3>
            <p>Customer Name: {order.customerName}</p>
            <p>Amount: ${order.amount}</p>
            <p>Status: {order.status}</p>
          </div>
          <div className="status-buttons">
            <button onClick={() => handleStatusChange(order.id, 'Accepted')}>Accept</button>
            <button onClick={() => handleStatusChange(order.id, 'Shipped')}>Ship</button>
            <button onClick={() => handleStatusChange(order.id, 'Delivered')}>Deliver</button>
          </div>
        </div>
      ))}
    </div>
  </AdminNavbar>
  );
}

export default ManageOrder;
