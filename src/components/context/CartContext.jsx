// Importerer useLocalStorage fra @uidotdev/usehooks til at gemme kurven i localStorage
import { useLocalStorage } from "@uidotdev/usehooks";
// React-funktioner til context og state
import { createContext, useContext } from "react";

// Opretter en ny kontekst, som vi kan bruge til at dele cart-tilstand i hele appen
const CartContext = createContext();

// CartProvider-komponenten pakker hele appen ind og gør cart-tilstanden tilgængelig for alle komponenter
export const CartProvider = ({ children }) => {
  // Bruger useLocalStorage til at gemme og hente kurv-indhold under nøglen "items"
  const [cartItems, setCartItems] = useLocalStorage("items", []);

  // Funktion til at tilføje et produkt til kurven
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Funktion til at fjerne en vare fra kurven baseret på dens _id
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Funktion til at øge mængden (quantity) af en vare i kurven
  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Funktion til at mindske mængden (quantity) af en vare i kurven
  const decreaseQty = (id) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item._id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // fjerner varen helt, hvis mængden er 0
    );
  };

  // Gør cartItems og funktionerne tilgængelige for alle børn af CartProvider
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook til nem adgang til cart-context i andre komponenter
export const useCart = () => useContext(CartContext);
