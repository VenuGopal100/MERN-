import React, { useState } from 'react';
import { Button, Label, TextInput,Select,Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories=["Fiction","Non-Fiction","Mystery","Programming","Science Fiction","Fantasy","Horror","Bibliography","Autobiography","History","Self-help","Memoir","Business","Children Books","Travel","Religion","Art and Design","Romance"];
  const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);

  const handleChangeSelectedValue=(e)=>{
    console.log(e.target.value);
    setSelectedBookCategory(e.target.value);


  }

  const handleBookSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFLink=form.bookPDFLink.value;
    const price=form.price.value;


    const bookObj={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFLink,price

    }
    console.log(bookObj);

    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },body:JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{alert("Uploaded succesfully");form.reset();window.location.href = '/';});
    


  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'><em>Upload Book</em></h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[900px] flex-col flex-wrap gap-4 ">
        {/*row 1*/}
        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
              <TextInput id="bookTitle" type="text" placeholder="Book Name" name="bookTitle" required />
          </div>

          {/*author name*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
              <TextInput id="authorName" type="text" placeholder="Author Name" name="authorName" required />
          </div>
        </div>


        {/*row 2*/}

        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
              <TextInput id="imageURL" type="text" placeholder="Book Image URL" name="imageURL" required />
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
            <Textarea id="bookDescription" placeholder=" About your Book" required rows={4} name="bookDescription" />
        </div>

        {/*book pdf*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFLink" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFLink" type="text" placeholder="Book PDF URL" name="bookPDFLink" required />
        </div>


        <div>
          <div>
            <Label htmlFor="price" value ="price" />
            <TextInput id="price" type="number" placeholder="price" name="price" required />
          </div>


        </div>
  
        <button type='submit' className='btn btn-outline-secondary'>Upload</button>
      </form>
      
      
    </div>
  )
}

export default UploadBook
