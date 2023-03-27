import React from 'react';
import adv1 from '../../../assets/adv1.jpg'
import adv2 from '../../../assets/adv2.jpg'
import adv3 from '../../../assets/adv3.jpg'
import adv4 from '../../../assets/adv4.jpg'
import class1 from '../../../assets/class1.jpg'
import class2 from '../../../assets/class2.jpg'
import class3 from '../../../assets/class3.jpg'
import class4 from '../../../assets/class4.jpg'
import crime1 from '../../../assets/crime1.jpg'
import crime2 from '../../../assets/crime2.jpg'
import crime3 from '../../../assets/crime3.jpg'
import crime4 from '../../../assets/crime4.jpg'



const BestSellerBook = () => {
    return (
        <div className='my-16'>
            <h1 className='text-4xl font-bold'>
                Best Seller 
                Book
                </h1>
                <div className='mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-16 gap-16' style={{width:'80%'}}>
                    <img className='w-64 h-80' src={adv1} alt="" />
                    <img className='w-64 h-80' src={adv2} alt="" />
                    <img className='w-64 h-80' src={adv3} alt="" />
                    <img className='w-64 h-80' src={adv4} alt="" />
                    <img className='w-64 h-80' src={class1} alt="" />
                    <img className='w-64 h-80' src={class2} alt="" />
                    <img className='w-64 h-80' src={class3} alt="" />
                    <img className='w-64 h-80' src={class4} alt="" />
                    <img className='w-64 h-80' src={crime1} alt="" />
                    <img className='w-64 h-80' src={crime2} alt="" />
                    <img className='w-64 h-80' src={crime3} alt="" />
                    <img className='w-64 h-80' src={crime4} alt="" />

                </div>
        </div>
    );
};

export default BestSellerBook;