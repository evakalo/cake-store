import React from "react";
import "./Cart.css";
function Cart(props) {
  const orderIds = Object.keys(props.order);
  return (
    <div className="cart">
      <div className="cart-order">
        <h2>Order</h2>
        {orderIds}
      </div>
    </div>
  );
}

export default Cart;
