import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => {
                const shuffledBooks = data.sort(() => 0.5 - Math.random());
                const selectedBooks = shuffledBooks.slice(0, 5);
                setBooks(selectedBooks);
            });
    }, []);

    return (
        <BookCards books={books} headLine="Best Seller Books" className="font-serif italic" />
    );
}

export default BestSellerBooks;
