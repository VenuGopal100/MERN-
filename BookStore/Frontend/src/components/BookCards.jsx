import React, { useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../components/BookCard.css';
import { FaCartShopping } from 'react-icons/fa6';
import { Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';


const BookCards = ({headLine,books,className=""}) => {
    console.log(books);
  return (
    <div className={`my-16 px-4 lg:px-24 ${className}`}>
        <h2 className='text-5xl text-center font-bold text-black my-5'>
            {headLine}
        </h2>
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
        {
            books.map(book =><SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`} className='block'>
                    <div className='relative'>
                        <img src={book.imageURL} className="w-full h-96 object-cover" alt=""/>
                        <div className='absolute top-3 bg-blue-400 hover:bg-black p-2 rounded'>
                            <FaCartShopping className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div className='book-details'>
                    <div className='mt-2'>
                      <h3>{book.bookTitle}</h3>
                      <p>{book.authorName}</p>
                    </div>
                    <div className='mt-2 text-red-600'>
                      <p>{'\u20B9'} {book.price}</p>
                    </div>
                  </div>
                </Link>       
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}


BookCards.propTypes={
  className:PropTypes.string
};


export default BookCards;