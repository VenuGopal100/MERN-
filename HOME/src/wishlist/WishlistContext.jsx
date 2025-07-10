import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
});

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlistItems(); 
  }, []);

  const fetchWishlistItems = async () => {
    try {
      const response = await api.get('/wishlist');
      setWishlist(response.data);
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    }
  };

  const addToWishlist = async (item) => {
    try {
      const response = await api.post(`/add-to-wishlist/${item._id}`);
      const addedItem = response.data;
      setWishlist((prevWishlist) => [...prevWishlist, addedItem]);
      
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };


 

  


  const removeFromWishlist = async (id) => {
    try {
      await api.delete(`/wishlist/${id}`);
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const wishlistContextValue = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={wishlistContextValue}>
      {children}
    </WishlistContext.Provider>
  );
};
