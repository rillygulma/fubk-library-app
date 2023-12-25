import React, { useState, useEffect } from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));    
  }, []) 
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card key={book.id} >
        <Link to={`/book/${book._id}`}>
        <img src={book.imageURL} alt=""/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              {book.bookTitle}
            </p>
            
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {book.category}
          </p>
        </Link>
        </Card>)
        }
      </div>
    </div>
  )
}

export default AllBooks;
