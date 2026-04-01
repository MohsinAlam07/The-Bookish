import React from 'react';
import { FaStar } from "react-icons/fa6";
import { Link, Links } from 'react-router';

const Boi = ({singlebook}) => {
    // console.log(singlebook)
    const {bookName,bookId,author,image,rating,category,tags,yearOfPublishing,publisher}=singlebook;
    return (
      <Link to={`/bookDetails/${bookId}`}>
       <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
  <figure className='p-5 bg-gray-300 w-2/3 mx-auto '>
    <img className='h-[170px]'
      src={image} />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-2'>
      {
      tags.map(tag=> <button>{tag}</button> )
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book By: {author}</p>
    <p>{publisher}</p>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline"> <FaStar />{rating}</div>
    </div>
  </div>
</div>
      </Link>
    );
};

export default Boi;