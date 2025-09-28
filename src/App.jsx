import { HomePage } from "./pages/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrdersPage } from "./pages/ordersPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
