import React, { useEffect, useState } from "react";
import Cookie from "./Cookie";
import sampleCookies from "./Cookies";
import Inventory from "./Inventory";
import InventoryBook from "./InventoryBook";
import Cart from "./Cart";
import "./Order.css";

function Order() {
  const [showInventory, setShowInventory] = useState(false);
  const [newSampleCookies, setNewSampleCookies] = useState(sampleCookies);

  const [order, setOrder] = useState(() => {
    const savedOrder = localStorage.getItem("order");

    if (savedOrder) {
      return JSON.parse(savedOrder);
    } else {
      return [];
    }
  });

  function openInventory(event) {
    setShowInventory(true);
  }

  function addCookie(newSampleCookies) {
    setNewSampleCookies(newSampleCookies);
  }
  function addToOrder(key) {
    const newOrder = { ...order }; //makes a copy of the order
    newOrder[key] = newOrder[key] + 1 || 1; //adds a new item, if there is already add one more, key (cookie number)
    setOrder(newOrder);
    // console.log(newOrder)
  }
  //sad trebas poslati te podatke cart komponenti i da ona prikaže

  function removeFromOrder(key) {
    const newOrder = { ...order };
    delete newOrder[key];
    //you have to put null and not delete, if you want to update the firebase
    setOrder(newOrder);
    console.log(newOrder);
  }
  function updateCookie(key, updatedCookie) {
    const newCookies = { ...newSampleCookies };
    newCookies[key] = updatedCookie;
    setNewSampleCookies(newCookies);
    console.log(newSampleCookies);
  }

  function removeCookie(key) {
    const removedCookies = { ...newSampleCookies };
    delete removedCookies[key];
    setNewSampleCookies(removedCookies);
    console.log(removedCookies);
  }

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
        {Object.keys(newSampleCookies).map((key) => (
          <Cookie
            key={key}
            index={key}
            details={newSampleCookies[key]}
            addToOrder={addToOrder} //loops over and gives us the key (cookie1,...) use key(unique identifier) so react is faster)
          />
        ))}
      </ul>
      <div className="wrapper-cart">
        <Cart
          order={order}
          cookies={sampleCookies}
          removeFromOrder={removeFromOrder}
        />
        <Inventory addCookie={addCookie} sampleCookies={newSampleCookies} />
        <button
          type="button"
          className="button-enter-inventory"
          onClick={openInventory}
        >
          Change Inventory
        </button>

        {showInventory &&
          Object.keys(newSampleCookies).map((key) => (
            <InventoryBook
              key={key}
              index={key}
              cookie={newSampleCookies[key]}
              updateCookie={updateCookie}
              removeCookie={removeCookie}
            />
          ))}
      </div>
    </div>
  );
}
export default Order;
