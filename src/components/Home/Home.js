import React from 'react';
import Banner from './Banner/Banner';
import BestSellerBook from './BestSellerBook/BestSellerBook';
import Books from './Books/Books';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <BestSellerBook></BestSellerBook>
        </div>
    );
};

export default Home;