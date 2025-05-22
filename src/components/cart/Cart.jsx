// Importerer useCart-hooken fra CartContext og CSS-modulet
import { useCart } from "../context/CartContext";
import styles from "./cart.module.css";

const Cart = () => {
  // Henter funktioner og cartItems fra context (global tilstand for kurven)
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  // Beregner den samlede pris ud fra alle varer i kurven
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className={styles.cartSection}>
      {/* Overskrift og underoverskrift */}
      <h1 className={styles.title}>Bestil</h1>
      <h2 className={styles.subTitle}>Udfyld venligst formularen herunder</h2>

      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {/* Hvis kurven er tom, vis besked – ellers vis varer */}
          {cartItems.length === 0 ? (
            <p>Din kurv er tom.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                {/* Billede af varen */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cartImage}
                />
                <div className={styles.itemDetails}>
                  {/* Titel og pris på varen */}
                  <h3>{item.title}</h3>
                  <p className={styles.price}>{item.price} ,-</p>

                  {/* Knapper til at ændre antal */}
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.qtyButton}
                      onClick={() => decreaseQty(item._id)}
                    >
                      -
                    </button>

                    {/* Viser nuværende antal */}
                    <span>{item.quantity}</span>

                    <button
                      className={styles.qtyButtonPlus}
                      onClick={() => increaseQty(item._id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Knap til at fjerne varen fra kurven */}
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

        {/* Viser samlet pris hvis der er varer i kurven */}
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
