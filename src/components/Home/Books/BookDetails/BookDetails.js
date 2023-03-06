import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookDetails = ({bookdetails,setBookings}) => {
const {bookName,image,authurName,price}=bookdetails;
// console.log(bookdetails);
    return (
        
        
       
        <div className="card bg-emerald-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            <span>Name: </span>
           <span style={{color:'#FF0066'}}>{bookName}</span> 
          </h2>
          <p className='text-xl'>Writer: <span style={{color:'#FF0066'}}>{authurName}</span></p>
          <p className='text-xl'>Price: <span style={{color:'#FF0066'}}>${price}</span> </p>
          <div className="card-actions mt-2 flex justify-evenly">
            <label htmlFor="booking-modal" className="btn btn-outline text-black  hover:bg-pink-600" onClick={()=>setBookings(bookdetails)}  style={{borderColor:'#FF0066'}}>Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;