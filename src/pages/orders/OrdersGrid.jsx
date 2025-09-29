import { Fragment } from "react";
import dayjs from "dayjs";

import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";
export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order}></OrderHeader>
            <OrderDetailsGrid order={order}></OrderDetailsGrid>
          </div>
        );
      })}
    </div>
  );
}
