import { createContext, useState, useContext, useEffect } from "react";
import { useCart } from "../CartContext/CartContext";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Load wishlist from local storage
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const { addToCart } = useCart();

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save wishlist to local storage
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save wishlist to local storage
      return updatedWishlist;
    });
  };

  const removeCategoryFromWishlist = (category) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.category !== category);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save wishlist to local storage
      return updatedWishlist;
    });
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  useEffect(() => {
    // Save wishlist to local storage whenever it changes
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, removeCategoryFromWishlist, isInWishlist, addToCart }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };