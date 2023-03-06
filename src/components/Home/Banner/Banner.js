import React from 'react';
import Lottie from 'lottie-react';
import bookAnimation from '../../../assets/book.json';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className=' flex min-h-[80vh] flex-col-reverse lg:flex-row items-center justify-between'>
        <div className='container mx-auto lg:flex lg:flex-row md:flex-row items-center'>
        <div className='text-start lg:w-3/5 md:mt-10 md:px-16 md:pt-8 lg:mt-10 lg:mx-8 lg:px-4 px-6 pt-8'>
            <div className='my-8'>
        <span className='text-6xl font-bold' style={{color:'#24A148'}}>Meet Your Next </span>
        <span className='text-6xl font-bold' style={{color:'#FF0066'}}>Favourite</span>
        </div>
        <p className='text-black text-xl my-4'>We can learn about history, philosophy, values, and science by reading books. A habit of reading builds our knowledge and contributes to intelligence. For many people, reading books is a stress relief exercise and an escape to a different world they can enjoy. For kids, books build language skills and imagination. </p>
        <p className='text-black text-xl my-4'>This is an online platform where you will buy or sell any kind of book. You can easily order any type of book through the online platform.It is the storehouse of books. </p>
        <button className='btn btn-outline text-black hover:bg-pink-600' style={{borderColor:'#FF0066'}}><Link to='/'>Purchase</Link></button>
        </div>
        <div className='lg:w-2/5 md:w-1/2 animation'>
        <Lottie animationData={bookAnimation} loop={true}></Lottie>

        </div>
    
        </div>
    </div>
    
    );
};

export default Banner;