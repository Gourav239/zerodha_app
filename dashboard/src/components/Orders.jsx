import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/orders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders", err);
      });
  }, []);

  return (
    <div className="orders">
      <h4>Your orders</h4>

      {allOrders.length === 0 ? (
        <p>No orders placed yet</p>
      ) : (
        allOrders.map((item) => (
          <div
            className="order-card "
            style={{
              margin: ".75rem",
              padding: ".5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              border: "1px solid #b2afaf",
            }}
            key={item._id}
          >
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Qty:</strong> {item.qty}
            </p>
            <p>
              <strong>Price:</strong> ₹{item.price}
            </p>
            <p>
              <strong>Mode:</strong> {item.mode}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
