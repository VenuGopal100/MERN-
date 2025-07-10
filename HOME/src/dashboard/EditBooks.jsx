import React, { useState } from 'react';
import { Label, TextInput,Select,Textarea } from "flowbite-react";
import { useLoaderData, useParams} from 'react-router-dom';




const EditBooks = () => {
    const {id}=useParams();
    const {authorName,bookTitle,category,bookDescription,imageURL,bookPDFLink,price}=useLoaderData();
    const bookCategories=["Fiction","Non-Fiction","Mystery","Programming","Science Fiction","Fantasy","Horror","Bibliography","Autobiography","History","Self-help","Memoir","Business","Children Books","Travel","Religion","Art and Design"];
    const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);



    


  const handleChangeSelectedValue=(e)=>{
    console.log(e.target.value);
    setSelectedBookCategory(e.target.value);


  }

  const handleUpdate=(e)=>{
    e.preventDefault();
    const form=e.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFLink=form.bookPDFLink.value;
    const price=form.price.value;


    const updateBookObj={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFLink,price

    }
    console.log(updateBookObj);


    fetch(`http://localhost:5000/book/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updateBookObj)
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        alert('Book updated successfully');
        window.location.href = '/';
    })

   

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'><em>Update Book</em></h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[900px] flex-col flex-wrap gap-4 ">
        {/*row 1*/}
        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
              <TextInput id="bookTitle" type="text" placeholder="Book Name" name="bookTitle" required defaultValue={bookTitle} />
          </div>

          {/*author name*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
              <TextInput id="authorName" type="text" placeholder="Author Name" name="authorName" required defaultValue={authorName}/>
          </div>
        </div>


        {/*row 2*/}

        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
              <TextInput id="imageURL" type="text" placeholder="Book Image URL" name="imageURL" required defaultValue={imageURL} />
          </div>

          {/*book category*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />

            </div>

            <Select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
              }

            </Select>
           
              
          </div>


          


        </div>


        {/*book description*/}
        <div>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id="bookDescription" placeholder=" About your Book" required rows={4} name="bookDescription" defaultValue={bookDescription} />
        </div>

        {/*book pdf*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFLink" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFLink" type="text" placeholder="book PDF URL" name="bookPDFLink" required defaultValue={bookPDFLink} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="price" />
          </div>
          <TextInput id="price" type="number" placeholder="price" name="price" required defaultValue={price} />
        </div>
  
        <button type='submit' className='btn btn-outline-secondary'>Update</button>
      </form>
      
      
    </div>
  )
}

export default EditBooks
