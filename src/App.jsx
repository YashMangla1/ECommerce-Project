import { HomePage } from "./pages/HomePage";
import { OrdersPage } from "./pages/ordersPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
