import React, { useState } from 'react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams,} from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();
  
  const bookCategories = [
    "Accounting",
    "Anatomy",
    "Applied Geophysics",
    "Architecture",
    "Biochemistry",
    "Biology",
    "Building Technology",
    "Business Administration",
    "Chemistry",
    "Computer Science",
    "Demography & Social Statistics",
    "Economics",
    "Education & English Language",
    "Geography",
    "Geology",
    "History & International Studies",
    "Industrial Chemistry",
    "Mathematics",
    "Medicine & Surgery",
    "Microbiology",
    "Nursing/Nursing Science",
    "Physics With Electronics",
    "Physiology",
    "Political Science",
    "Quantity Survey",
    "Sociology",
    "Statistic",
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  // handle submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value; 
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    // Update Book Data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("👌 Book is Updated sucessfully!!");  
    })

  }
  return (
    <div className='px-4 my-12'>
     <h2 className='mb-8 text-3xl font-bold '>Update The Book Data</h2> 

     <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" className='font-bold'/>
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={bookTitle} />
      </div>
      {/* authorName */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" className='font-bold'/>
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author name" required defaultValue={authorName} />
      </div>
      </div>
      {/* 2nd row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" className='font-bold'/>
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required defaultValue={imageURL} />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" className='font-bold'/>
        </div>

        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </select>
        </div>
      </div>
      {/* bookDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" className='font-bold'/>
        </div>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Add Book Description" className='w-full' required rows={5} defaultValue={bookDescription} />
      </div>
      {/* book isbn */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book ISBN" className='font-bold'/>
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required defaultValue={bookPDFURL} />
      </div>
      <Button type="submit" className='mt-5'>Update Book</Button>
    </form> 
    </div>
  )
}

export default EditBooks;
