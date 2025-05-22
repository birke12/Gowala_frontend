// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import styles from "./cart.module.css";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className={styles.cartSection}>
      <h1 className={styles.title}>Bestil</h1>
      <h2 className={styles.subTitle}>Udfyld venligst formularen herunder</h2>

      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {cartItems.length === 0 ? (
            <p>Din kurv er tom.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cartImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p className={styles.price}>{item.price} ,-</p>

                  <div className={styles.quantityControls}>
                    <button
                      className={styles.qtyButton}
                      onClick={() => decreaseQty(item._id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button  onClick={() => increaseQty(item._id)}>+</button>
                  </div>
                </div>

                <button
                  className={styles.deleteButton}
                  onClick={() => removeFromCart(item._id)}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.total}>
            <h3>Total: {total.toFixed(2)} ,-</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
