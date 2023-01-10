import React from "react";
import { useNavigate } from "react-router-dom";
import "./Description.css";
function InventoryButton() {
  const navigate = useNavigate();

  const goToInventory = () => {
    navigate("/inventory");
  };

  return (
    <div>
      <button className="inventory-button" onClick={goToInventory}>
        Order now!
      </button>
    </div>
  );
}

export default InventoryButton;
