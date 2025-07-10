
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import { CartProvider } from './cart/CartContext'; 
import { WishlistProvider } from './wishlist/WishlistContext';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <MyFooter />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
