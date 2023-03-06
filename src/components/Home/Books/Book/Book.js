import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {type,image,_id}=book;
    return (
      <div className="card bg-emerald-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Link to={`bookdetail/${_id}`}>
        <img src={image} alt="" className="rounded-xl" />
        </Link>
      </figure>
      <div className="card-body items-center text-center">
        <Link to={`bookdetail/${_id}`}>
        <h2 className="card-title">{type}</h2>
        </Link>
      </div>
    </div>
    );
};

export default Book;