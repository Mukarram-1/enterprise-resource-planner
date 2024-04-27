import React, { useState, useEffect } from "react";
import "./UpdateForm.css";

function UpdateOrdersModal({ isOpen, onClose, order }) {

  const [vendorname, setVendorName] = useState("");
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [shippingStatus, setShippingStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (order) {
      setVendorName(order.vendor_name);
      setMaterial(order.material);
      setQuantity(order.quantity);
      setAmount(order.amount);
      setShippingStatus(order.shipping_status);
      setPaymentStatus(order.payment_status);
      setDate(order.order_date);
    }
  }, [order]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/updateOrder/${order.id}`, {
        method: 'POST',
        body: JSON.stringify({
          vendorname,
          material,
          quantity,
          amount,
          shippingStatus,
          paymentStatus,
          date
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("Order Updated!");
        window.location.href = 'http://localhost:3000/orders';
      } else {
        console.error('Failed to update order in the database');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
    if (document.getElementById("vendorname").value !== "") {
        alert("Order Updated Successfully!");
      }
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 style={{textAlign:'center'}}>Update Order</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Vendor Name:</label>
              <input
                type="text"
                id="vendorname"
                name="vendorname"
                value={vendorname}
                onChange={(e) => setVendorName(e.target.value)} // Update name state
              />
            </div>
            <div className="form-group">
              <label>Material Name:</label>
              <input
                type="text"
                id="material"
                name="material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)} // Update name state
              />
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} // Update phone state
              />
            </div>
            <div className="form-group">
              <label>Amount:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} // Update email state
              />
            </div>
            <div className="form-group">
              <label>Shipping Status:</label>
              <select
              id="shippingStatus"
              name="shippingStatus"
              value={shippingStatus}
              onChange={(e) => setShippingStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
            </select>
            </div>
            <div className="form-group">
              <label>Payment Status:</label>
              <select
              id="paymentStatus"
              name="paymentStatus"
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            </div>
            <div className="form-group">
              <label>Order Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} // Update address state
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateOrdersModal;
