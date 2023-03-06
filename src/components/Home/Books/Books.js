import React, { useEffect, useState } from 'react';
import Book from './Book/Book';

const Books = () => {
const [books,setBooks]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/category')
    .then(res=>res.json())
    .then(data=>{
        setBooks(data)
    })
},[])
    return (
        <div className='my-20'>
          <h1 className='text-5xl font-bold my-16'>
            <span style={{color:'#24A148'}}>Different Types Of </span>
            <span style={{color:'#FF0066'}}>Books</span>
            </h1> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  mx-10'>
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div> 
        </div>
    );
};

export default Books;