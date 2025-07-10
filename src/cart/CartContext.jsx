import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
});

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetchCartItems(); 
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await api.get('/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await api.post('/add-to-cart/' + item._id);
      const addedItem = response.data;
      const existingItem = cart.find(cartItem => cartItem._id === addedItem._id);
      if (existingItem) {
        incrementQuantity(existingItem._id); 
      } else {
        setCart(prevCart => [...prevCart, addedItem]);
      }
      navigate("/cart");
      
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  
  
  const incrementQuantity = async (id) => {
    try {
      const response = await api.put(`/cart/increment/${id}`);
      if (response.status === 200) {
        setCart(prevCart =>
          prevCart.map(item =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      }
    } catch (error) {
      console.error('Error incrementing quantity:', error);
    }
  };
  
  

  const decrementQuantity = async (id) => {
    try {
      const response = await api.put(`/cart/decrement/${id}`);
      if (response.status === 200) {
        const result = response.data;
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error decrementing quantity:', error);
    }
  };

  
  

  const removeAllFromCart = async (item) => {
    try {
      if (!item || !item._id) {
        throw new Error('Item or item._id is undefined');
      }
      await api.delete('/cart/' + item._id);
      setCart(cart.filter((cartItem) => cartItem._id !== item._id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const cartContextValue = {
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeAllFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
