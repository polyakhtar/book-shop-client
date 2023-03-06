import React, { useContext} from 'react';
import { toast } from 'react-hot-toast';

import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({bookings,bookdetails}) => {
const {user}=useContext(AuthContext);
const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const bookname=form.bookname.value;
    const price=form.price.value;
    const location=form.location.value;
    const phone=form.phone.value;
    const data={
        phoneImage:bookings.image,
        email:email,
        bookname:bookname,
        price:price,
        location:location,
        phone:phone,
        id:bookings._id
    }
    fetch('http://localhost:5000/bookings',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.acknowledged){
            toast('Booking Successfully')
        }
    })
}

   
    return (
        <div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-xl font-bold">
      <span style={{color:'#24A148'}}>Category Name : </span>    
      <span style={{color:'#FF0066'}}> {bookings.categoryName}</span> 
        </h3>
          <form onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="input w-full input-bordered "
            />

            <input
              name="bookname"
              value={bookings.bookName}
              readOnly
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              value={bookings.price}
              readOnly
              type="number"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Your Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className=" btn btn-outline text-black  hover:bg-pink-600"
              style={{borderColor:'#FF0066'}}
              type="submit"
              value="Submit"
            />
         
          </form>
    
  </div>
</div>
</div>
    );
};

export default BookingModal;