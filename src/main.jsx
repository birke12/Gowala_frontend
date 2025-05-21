import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext.jsx"; // ✅ adjust path if needed

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        {" "}
        {/* ✅ Wrap App here */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
