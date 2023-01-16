import React from "react";
import { useNavigate } from "react-router-dom";
import "./Description.css";
function Button() {
  const navigate = useNavigate();

  const goToStore = () => {
    navigate("/order");
  };

  return (
    <div>
      <button className="enter-button-landing-page" onClick={goToStore}>
        Enter the bakery
      </button>
    </div>
  );
}

export default Button;
