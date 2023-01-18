import { Routes, Route } from "react-router-dom";
import App from "./App";
import InventoryBook from "./InventoryBook";
import Order from "./Order";
function RouterEva() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
        <Route path="/inventory" element={<InventoryBook />} />
      </Routes>
    </>
  );
}

export default RouterEva;
