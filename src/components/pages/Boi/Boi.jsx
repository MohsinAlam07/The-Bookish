import React from 'react';

const Boi = ({singlebook}) => {
    // console.log(singlebook)
    const {bookName,author,image}=singlebook;
    return (
       <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-5 bg-gray-300 w-2/3 mx-auto '>
    <img className='h-[170px]'
      src={image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Boi;