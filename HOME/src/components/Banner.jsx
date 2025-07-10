import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100'>
        <div className='flex w-full flex-col md:flex-row justify-around items-center gap-12 py-40 px-10'>
            <div className='md:w-1/2 h-full space-y-8 '>
                <h2 className='text-5xl font-semibold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-500'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>Welcome to our bookstore! Here, you can find a wide range of books at unbeatable prices. Whether you're looking to buy or sell, we've got you covered. Explore our collection, from bestsellers to rare finds, and enjoy the convenience of shopping online.</p>
                <div>
                    <input type='text' name='search' id='search' placeholder='search a book' className='py-2 px-4 rounded-md outline-none border border-gray-300'/>
                    <button className='bg-blue-500 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-md ml-3'>Search</button>
                </div>
            </div>
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner