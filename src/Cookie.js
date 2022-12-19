import React from "react";
import "./Cookie.css";
import { formatPrice } from "./helpers";
function Cookie(props) {
  const { image, name, price, desc, status } = props.details;
  const isAvailable = status === "available";
  function handleClick(event) {
    console.log(props.index); //props.index is the key - cookie1,...
    props.addToOrder(props.index); //function is in the order component
  }
  return (
    <>
      {" "}
      <li className="cookie">
        <img src={image} alt="" className="image-cookie"></img>
        <span className="cookie-text">
          <h3 className="cookie-name"> {name} </h3>
          <span className="price">{formatPrice(price)} </span>
          <span>
            <p className="description">{desc}</p>
          </span>
        </span>
      </li>
      <button
        className="add-to-cart"
        disabled={!isAvailable}
        onClick={handleClick}
      >
        {" "}
        {isAvailable ? "Add to cart" : "Sold out"}
      </button>
    </>
  );
}

export default Cookie;
