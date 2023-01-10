import React, { useState } from "react";
import "./Inventory.css";
import "./Order.css";
function Inventory(props) {
  const [newSampleCookies, setNewSampleCookies] = useState(props.sampleCookies);

  let cookie = {
    name: "",
    image: "",
    desc: "",
    price: "",
    status: "",
  };

  function createCookie(event) {
    event.preventDefault();
    cookie = {
      name: event.target.name.value,
      price: event.target.price.value,
      desc: event.target.desc.value,
      status: event.target.status.value,
    };
    newSampleCookies[`cookie${Date.now()}`] = cookie;

    setNewSampleCookies({ ...newSampleCookies }); //to si promijenila , bio je cookie unutar curly

    props.addCookie(newSampleCookies);
  }
  return (
    <div className="inventory-form">
      <h2>Inventory form</h2>
      <form onSubmit={createCookie}>
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <input name="desc" type="text" placeholder="Desc" />
        <input name="image" type="text" placeholder="Image" />
        {/* <select name="status">
          <option value="available">Fresh batch</option>
          <option value="unavailable">Sold Out!</option>
        </select> */}
        <button type="submit">+ Add cookie</button>
      </form>
    </div>
  );
}

export default Inventory;
