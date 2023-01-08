import React from "react";
import { formatPrice } from "./helpers";
import "./Cart.css";
function Cart(props) {
  function showOrder(key) {
    const cookie = props.cookies[key];
    const count = props.order[key];
    return (
      <li key={key}>
        {count}
        {cookie.name}
      </li>
    );
  }
  const orderIndex = Object.keys(props.order);
  const total = orderIndex.reduce((lastTotal, key) => {
    const cookie = props.cookies[key];
    const count = props.order[key];
    return lastTotal + count * cookie.price;
  }, 0);
  return (
    <div className="cart">
      <div className="cart-order">
        <h2>Order</h2>
        <ul>{orderIndex.map(showOrder)}</ul>
        Total: {formatPrice(total)}
      </div>
    </div>
  );
}

export default Cart;
