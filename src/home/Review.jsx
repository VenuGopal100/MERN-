import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import proPic from '../assets/profile.jpg';

const reviews = [
  {
    stars: 3,
    text: 'Great bookstore with a wide selection. The staff is knowledgeable and friendly. I always find what I am looking for!',
    name: 'Alice'
  },
  {
    stars: 4,
    text: 'I love the atmosphere and the collection of books available here. The prices are reasonable and the service is excellent.',
    name: 'Bob'
  },
  {
    stars: 3,
    text: 'The online ordering process was smooth and the delivery was quick. Highly recommend this store for all book lovers!',
    name: 'Charlie'
  },
  {
    stars: 5,
    text: 'An amazing bookstore with a fantastic collection of rare and popular books. The reading space is cozy and perfect for spending hours.',
    name: 'Diana'
  },
  {
    stars: 4,
    text: 'I found some great deals on my favorite books. The staff is very helpful and the store is well-organized.',
    name: 'Eve'
  }
];

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-4xl font-serif italic text-center mb-10 leading-snug'>Our Customers</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className='bg-white text-black rounded-lg shadow-lg p-6 flex flex-col justify-between h-full'>
              <div className='text-amber-500 flex gap-1 mb-4'>
                {[...Array(review.stars)].map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
              <div className='mb-5 text-gray-700'>
                {review.text}
              </div>
              <div className='flex items-center mt-auto'>
                <Avatar img={proPic} alt={`avatar of ${review.name}`} rounded className='w-10 h-10' />
                <h5 className='ml-3 text-lg font-medium'>{review.name}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
