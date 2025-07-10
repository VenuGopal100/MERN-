import React, { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import emptyCartImage from '../images/empty-cart.png';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeAllFromCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const formattedTotal = totalPrice.toFixed(2);
  const navigate=useNavigate();

  const handleRemove = (item) => {
    if (item && item._id) {
      removeAllFromCart(item);
    } else {
      console.error('Item or item._id is undefined');
    }
  };

  const handleStartShopping=()=>{
    navigate('/shop');
  }

  return (
    <div className="container mx-auto px-4 lg:px-24 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center mt-14"><em>Your Shopping Cart</em></h2>
      <div className="grid gap-4">
        {cart.map((cartItem) => (
          <div key={cartItem._id} className="bg-white rounded-lg shadow-md overflow-hidden flex mb-4">
            <img src={cartItem.imageURL} alt={cartItem.bookTitle} className="h-50 w-32 object-cover" />
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{cartItem.bookTitle}</h3>
                  <p className="text-sm text-gray-500">{cartItem.authorName}</p>
                  <p className="text-sm mt-2">{cartItem.bookDescription}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(cartItem._id)}
                    className="bg-gray-300 text-gray-600 py-1 px-2 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={cartItem.quantity}
                    readOnly
                    className="bg-gray-100 text-center w-12 mx-2"
                  />
                  <button
                    onClick={() => incrementQuantity(cartItem._id)}
                    className="bg-gray-300 text-gray-600 py-1 px-2 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold">Price per item: {'\u20B9'}{cartItem.price}</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleRemove(cartItem)}
                  className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96 mb-12 mt-10">
          <img src={emptyCartImage} alt="Empty Cart" className="max-w-sm h-auto" />
          <p className="text-gray-900 text-center mt-3 text-xl md:text-lg font-sans">Looks like you have not added anything to your cart.</p>
          <p className='text-gray-900 text-center mt-2 text-xl md:text-lg font-sans'>Go ahead & explore our top book categories</p>
          <button className='btn btn-primary mt-3 mb-3' type='button' onClick={handleStartShopping}>Start Shopping</button>
        </div>

        
      )}
      {cart.length > 0 && (
        <div className="mt-8 p-4  rounded-lg w-full flex flex-col justify-center ">
          
          <div className="flex justify-center  items-center ">
            <p className="text-lg font-semibold">Total Amount : </p>
            <p className="text-lg font-semibold">{'\u20B9'}{formattedTotal}</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
