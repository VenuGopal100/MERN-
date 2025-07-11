import React from 'react';
import { HiBookOpen } from 'react-icons/hi';

const DashBoard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', }} className='flex flex-col justify-center items-center m-20'>
      <HiBookOpen size={80} style={{ color: '#4CAF50' }} />
      <div className='bg-slate-100 py-4 px-8'>
        <h1 className='text-gray-600 font-semibold text-xl'>Welcome to Your Bookstore Dashboard!</h1>
        <p className='font-semibold text-lg mt-4 '>
          It looks like you haven't added any books or managed any categories yet.
          <br />
          To get started, use the sidebar to upload books, manage existing ones, or view analytics.
          <br />
          You can also check out the <a href="/admin/dashboard/upload">Upload Books</a> page to add new titles.
        </p>
        <p className='font-semibold text-lg text-red-600 mt-4'>
          If you need help, visit the <a href="#" onClick={() => window.location.href='https://www.nopcommerce.com/en/demo-link'}>Help</a> section or consult the <a href="#" onClick={() => window.location.href='https://www.geeksforgeeks.org/bookstore-ecommerce-app-using-mern-stack/'}>Documentation</a>.
        </p>
      </div>
  </div>
  )
}

export default DashBoard