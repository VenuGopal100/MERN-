import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartContext } from '../cart/CartContext';
import { WishlistContext } from '../wishlist/WishlistContext';

const SingleBook = () => {
  const { _id, authorName, bookTitle, category, bookDescription, imageURL, bookPDFLink, price } = useLoaderData();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToCart = () => {
    const book = {
      _id,
      authorName,
      bookTitle,
      category,
      bookDescription,
      imageURL,
      bookPDFLink,
      price,
      quantity: 1,
    };
    addToCart(book);
  };

  const handleAddToWishlist = () => {
    const book = {
      _id,
      authorName,
      bookTitle,
      category,
      bookDescription,
      imageURL,
      bookPDFLink,
      price,
    };
    addToWishlist(book);
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='flex flex-col lg:flex-row gap-8'>
        <img src={imageURL} alt={bookTitle} className='h-96 w-auto object-cover rounded-lg shadow-lg' />
        <div className='flex flex-col '>
          <div>
            <h2 className='text-5xl font-bold mb-4'>{bookTitle}</h2>
            <h3 className='text-xl text-gray-700 mb-2'>by {authorName}</h3>
            <p className='text-lg text-gray-500 mb-4'><strong>Category:</strong> {category}</p>
            <p className='text-gray-700 mb-6'>{bookDescription}</p>
          </div>
          <div className='flex gap-4 '>
            <a href={bookPDFLink} target='_blank' rel='noopener noreferrer' className='bg-blue-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-800 transition-colors duration-300'>
              Read PDF
            </a>
            <button onClick={handleAddToCart} className='bg-green-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300'>
              Buy Now
            </button>
            <button onClick={handleAddToWishlist} className='bg-red-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-700 transition-colors duration-300'>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
