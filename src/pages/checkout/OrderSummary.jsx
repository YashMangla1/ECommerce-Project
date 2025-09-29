import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";
export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
              ></DeliveryDate>
              <div className="cart-item-details-grid">
                <CartItemDetails
                  cartItem={cartItem}
                  loadCart={loadCart}
                ></CartItemDetails>
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                ></DeliveryOptions>
              </div>
            </div>
          );
        })}
    </div>
  );
}
