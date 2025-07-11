import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(2,7)));

    },[])
  return (
    <BookCards books={books} headLine="Other Books" className='font-serif italic '/>
  )
}

export default OtherBooks;