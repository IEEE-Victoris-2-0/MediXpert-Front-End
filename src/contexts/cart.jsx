import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  toast.success("Item added to cart");

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  decreaseItemQuantity: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0,
  clearCart: () => {},
  applyCoupon: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const decreaseItemQuantity = (item) => {
    if (item.quantity === 1) {
      removeItemFromCart(item);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
      toast.error("Item removed from cart");
    }
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    toast.error("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyCoupon = (coupon) => {
    if (coupon.toUpperCase() === "OFF10") {
      setCartTotal(cartTotal * 0.9);
      toast.success("Coupon applied");
    } else {
      toast.error("Invalid coupon");
    }
  };

  useEffect(() => {
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    setCartTotal(
      cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    );
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    cartCount,
    decreaseItemQuantity,
    removeItemFromCart,
    cartTotal,
    clearCart,
    applyCoupon,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
