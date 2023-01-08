import React from "react";
import { formatPrice } from "./helpers";
import "./Cart.css";
function Cart(props) {
  function showOrder(key) {
    const cookie = props.cookies[key];
    const count = props.order[key];
    return (
      <li key={key} className="cookie-order">
        {count} {cookie.name}
        {formatPrice(count * cookie.price)}
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
    <div className="cart zigzag">
      <div className="cart-order">
        <h2>ORDER</h2>
        <ul className="cart-list"> {orderIndex.map(showOrder)}</ul>
        <strong>Total:</strong> {formatPrice(total)}
      </div>
    </div>
  );
}

export default Cart;
