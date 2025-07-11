import React, { useEffect, useState } from 'react';
// import { Table } from "flowbite-react";
import {Link} from "react-router-dom";


const ManageBooks = () => {
  const [allBooks,setAllBooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setAllBooks(data));
  },[]);


  const handleDelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/books/${id}`,{
      method:"DELETE",

    }).then(res=>res.json()).then(data=>{
      alert("Book Deleted successfully");
      setAllBooks(data);
      window.location.reload();
    })

    
  };



  return ( 

    
    <div className='px-2 my-16 ml-8'>
    <h2 className='mb-8 text-3xl font-bold '><em>Manage your Books</em></h2>
    <div className='table-responsive m-4'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col' className='px-4'>No.</th>
            <th scope='col' className='px-4'>Book Name</th> 
            <th scope='col' className='px-4'>Author</th>
            <th scope='col' className='px-4'>Category</th>
            <th scope='col' className='px-4'>Price</th>
            <th scope='col' className='px-4 '>Edit or Manage</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book, index) => (
            <tr key={book._id}>
              <th scope='row'>{index + 1}</th>
              <td className='px-4'>{book.bookTitle}</td>
              <td className='px-4'>{book.authorName}</td>
              <td className='px-4'>{book.category}</td>
              
              <td className='px-4' style={{width:'120px'}}>{'\u20B9'} {book.price}</td>
              <td className='px-4' >

                <div className='flex justify-center items-center'>
                  <Link className='text-cyan-600 hover:underline mr-4' to={`/admin/dashboard/edit-books/${book._id}`}>
                    Edit
                  </Link>
                  <button className='btn btn-danger btn-sm' onClick={() => handleDelete(book._id)}>
                    Delete
                  </button>

                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>




   
  )
}

export default ManageBooks;




