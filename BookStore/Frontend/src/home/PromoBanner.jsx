import React from 'react'
import { Link } from 'react-router-dom';
import bookPic from "../assets/awardbook.jpg"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24 mx-2'>
        <div className='flex flex-col md:flex-row justify-between items-center  gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-semibold  mb-6 leading-snug'>2023 National Book Awards for Fiction ShortList</h2>
                <Link to="/shop" className=' block'><button className='bg-blue-300 text-white rounded font-semibold px-5 py-2 hover:bg-black transitiob-all duration-300'>Get Promo Code</button></Link>
            </div>
            <div>
                <img src={bookPic} alt="" className='w-96 rounded'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner