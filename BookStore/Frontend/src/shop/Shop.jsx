import React,{useEffect,useState,useContext} from 'react'
import { Card } from "flowbite-react";
import { CartContext } from '../cart/CartContext';
import { WishlistContext } from '../wishlist/WishlistContext';



const Shop = () => {
    const [books,setBooks] =useState([]);
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);
    
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data));
    },[])

    const handleAddToWishlist = (bookId, authorName, bookTitle, category, bookDescription, imageURL, bookPDFLink, price) => {
        const book = {
            _id: bookId,
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
    <div className='mt-28 px-4 lg:px24 mb-4'>
        <div className='flex justify-center items-center'>
            <p className='text-3xl font-bold text-center mb-12 text-amber-800'><em>All Books are here</em></p>
                     
            
            </div>
        <div className='grid gap-8  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
            {
                books.map(book =>   <Card key={book._id} book={book} href="#" >
                  <img src={book.imageURL} alt="" className='w-full h-1/2 object-cover rounded-t'></img>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
                      {book.bookTitle}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 mb-1">
                      Author: {book.authorName}<br/>Price: {'\u20B9'}{book.price}<br/>Category: {book.category}
                  </p>
                  <button onClick={() => addToCart(book)} className='bg-blue-500 text font-semibold text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300 mt-2'>
                    Buy Now
                  </button>
                  <button onClick={() => handleAddToWishlist(book._id, book.authorName, book.bookTitle, book.category, book.bookDescription, book.imageURL, book.bookPDFLink, book.price)} className='bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300'>
                                Add to Wishlist
                  </button>
              </Card>
              )
            }
        </div>
      
    </div>
  )
}

export default Shop;



