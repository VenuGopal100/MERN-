import React, { useContext } from 'react';
import { WishlistContext } from '../wishlist/WishlistContext';
import emptyWishlistImage from '../images/empty-wishlist.png';
import { useNavigate } from 'react-router-dom';



const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const navigate=useNavigate();

  const handleRemove = (itemId) => {
    removeFromWishlist(itemId);
  };

  const handleStartShopping=()=>{
    navigate('/shop');
  }

  return (
   

    <div className="container mx-auto px-4 lg:px-24 py-8 mb-4">
      <h2 className="text-3xl mt-14 font-bold mb-8 text-center"><em>Your Wishlist</em></h2>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <img src={emptyWishlistImage} alt="Empty Wishlist" className="max-w-xl h-auto" />
          <p className="text-red-700 mt-4 text-2xl font-bold">Your wishlist is currently empty.</p>
          <p className='mt-4 text-blue-500 font-semibold text-xl'>Seems like you don't have wishes here.</p>
          <p className='mt-3 text-blue-500 font-semibold text-xl'>Make a wish!</p>
          <button className='btn btn-primary mt-3 mb-2' type='button' onClick={handleStartShopping}>Start Shopping</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.imageURL} alt={item.bookTitle} className="w-full h-auto object-cover" />
              <div className="justify-between text-center p-4">
                <h2 className="text-lg font-semibold">{item.bookTitle}</h2>
                <p className="text-gray-700">{item.authorName}</p>
                <p className="text-gray-900 font-bold">${item.price}</p>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="items-center  mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>





  );
};

export default Wishlist;
