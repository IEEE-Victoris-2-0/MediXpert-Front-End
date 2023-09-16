import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { CartContextProvider } from "./contexts/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
