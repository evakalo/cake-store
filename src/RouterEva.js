import { Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./Order";
function RouterEva() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default RouterEva;
