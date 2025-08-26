import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Product_api_context_provider } from "./_api/products_api.jsx";
import { CartProvider } from "./pages/cart/Cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Product_api_context_provider>
      <CartProvider>
        <App />
      </CartProvider>
    </Product_api_context_provider>
  </StrictMode>
);
