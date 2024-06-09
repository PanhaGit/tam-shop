import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css"; // Ensure this path is correct
import router from "./router/router";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/filterContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <RouterProvider router={router} />
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>
);
