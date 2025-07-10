import React from 'react'
import { Link } from 'react-router-dom';
import FavBookImg from "../assets/favoritebook.png"

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='round md:w-10/12'/>
        </div>
        <div className='md:w-1/2 '>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'><em>Find Your Favorite <span className='text-blue-300'>Books Here !</span></em></h2>
            <p className='mb-5 text-lg md:w-5/6'>Are you a fan of romance, thrillers, history, or fiction? We've got you covered! Dive into our online bookstore and ebook library, and enjoy the ultimate book-reading experience at your convenience. Explore with us and fall in love with BookNest!</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 '>
                <div>
                    <h3 className='text-3xl font bold'>100+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font bold'>100+</h3>
                    <p className='text-base'>Registered Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font bold'>50+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>
            <Link to="/shop" className='mt-12 block'><button className='bg-blue-300 text-white rounded font-semibold px-5 py-2 hover:bg-black transitiob-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook