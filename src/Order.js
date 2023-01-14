import React, { useEffect, useState } from "react";
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
  }
  function addToOrder(key) {
    const newOrder = { ...order }; //makes a copy of the order
    newOrder[key] = newOrder[key] + 1 || 1; //adds a new item, if there is already add one more, key (cookie number)
    setOrder(newOrder);
    // console.log(newOrder);
  }
  //sad trebas poslati te podatke cart komponenti i da ona prikaže
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order"));
    console.log(order);
    if (order) {
      setOrder(order);
    }
  }, []);

  return (
    <div className="order">
      <ul className="sampleCookies">
        {Object.keys(sampleCookies).map((key) => (
          <Cookie
            key={key}
            index={key}
            details={sampleCookies[key]}
            addToOrder={addToOrder} //loops over and gives us the key (cookie1,...) use key(unique identifier) so react is faster)
          />
        ))}
      </ul>
      <div className="wrapper-cart">
        <Cart order={order} cookies={sampleCookies} />

        <Inventory addCookie={addCookie} sampleCookies={newSampleCookies} />
      </div>
      y
    </div>
  );
}
export default Order;
