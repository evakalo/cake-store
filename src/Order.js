import React, { useState } from "react";
import Cookie from "./Cookie";
import sampleCookies from "./Cookies";
import Inventory from "./Inventory";
import Cart from "./Cart";
import "./Order.css";

function Order() {
  const [newSampleCookies, setNewSampleCookies] = useState(sampleCookies);
  const [order, setOrder] = useState({});
  function addCookie(newSampleCookies) {
    setNewSampleCookies(newSampleCookies);
    console.log(newSampleCookies);
  }
  function addToOrder(key) {
    const newOrder = { ...order }; //makes a copy of the order
    newOrder[key] = newOrder[key] + 1 || 1; //adds a new item if there is already add one more, key (cookie number)
    setOrder(newOrder);
    console.log(newOrder);
  }

  return (
    <div className="order">
      <ul className="sampleCookies">
        {Object.keys(sampleCookies).map((key) => (
          <Cookie
            key={key}
            index={key}
            details={sampleCookies[key]}
            addToOrder={addToOrder}
          />
        ))}
      </ul>
      <div className="wrapper-cart">
        <Inventory addCookie={addCookie} sampleCookies={newSampleCookies} />
        <Cart />
      </div>
    </div>
  );
}
export default Order;
