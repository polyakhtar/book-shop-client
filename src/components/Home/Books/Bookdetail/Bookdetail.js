import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookDetails from '../BookDetails/BookDetails';
import BookingModal from '../BookingModal/BookingModal';

const Bookdetail = () => {
const {id}=useParams();
const [bookDetails,setBookDetails]=useState([]);
const [bookings,setBookings]=useState(null);
useEffect(()=>{
    fetch(`http://localhost:5000/books/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setBookDetails(data)
    })
},[id])
    return (
        <div className='min-h-screen'>
            <h1 className='text-4xl font-bold text-center mt-10' style={{color:'#FF0066'}}>Books</h1>
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
        {
            bookDetails.map(bookdetails=><BookDetails
            key={bookdetails._id}
            bookdetails={bookdetails}
            setBookings={setBookings}
            ></BookDetails>)
        }
        {
            bookings && <BookingModal bookdetails={bookDetails} bookings={bookings}></BookingModal>
        }
            
        </div>
        </div>
    );
};

export default Bookdetail;