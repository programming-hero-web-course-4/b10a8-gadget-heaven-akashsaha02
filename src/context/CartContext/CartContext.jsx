import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to local storage
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === id);
      let updatedCart;
      if (existingProduct.quantity > 1) {
        updatedCart = prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        updatedCart = prevCart.filter((item) => item.id !== id);
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to local storage
      return updatedCart;
    });
  };

  const removeCategoryFromCart = (category) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.category !== category);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to local storage
      return updatedCart;
    });
  };

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeCategoryFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };