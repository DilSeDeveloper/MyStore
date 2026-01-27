import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="item-info">
            <p className="item-name">{item.name}</p>
            <p>₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <div className="cart-summary">
        <p>Total Items: <strong>{totalItems}</strong></p>
        <p>Total Price: <strong>₹{totalPrice}</strong></p>
      </div>

      <button className="checkout-btn" disabled>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
