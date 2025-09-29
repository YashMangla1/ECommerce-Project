import axios from "axios";
import { Header } from "../../components/Header";
import "./OrdersPage.css";
import { OrdersGrid } from "./OrdersGrid";
import { useState, useEffect } from "react";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart}></Header>
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders}></OrdersGrid>
      </div>
    </>
  );
}
