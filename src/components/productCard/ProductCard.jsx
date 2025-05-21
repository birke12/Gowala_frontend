import { useState } from "react";
import { useCart } from "../context/CartContext"; // ✅ update path if needed
import Swal from "sweetalert2";
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    Swal.fire({
      title: "Tilføjet til kurv!",
      text: `${product.title} er blevet tilføjet til din kurv.`,
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  return (
    <li className={styles.card}>
      <div className={styles.discount}>60%</div>
      {product.image && <img alt={product.title} src={product.image} />}
      <h2>{product.title}</h2>
      <p>{product.price} kr.</p>
      <div className={styles.buttons}>
        <button onClick={handleAddToCart} disabled={isAdded}>
          {isAdded ? "Tilføjet" : "Tilføj til kurv"}
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
