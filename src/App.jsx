import { HomePage } from "./pages/home/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
