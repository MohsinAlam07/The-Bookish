import React, { Suspense } from 'react';
import Boi from '../Boi/Boi';

const Books = ({data}) => {
  return (
    <div>
      <h1 className='text-3xl text-center p-6'>Books</h1>
      <Suspense fallback={ <span>loading...</span>}>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
       {
        data.map((singlebook)=> <Boi key={singlebook.bookId} singlebook={singlebook}></Boi>)
      }
     </div>

      </Suspense>
      
    </div>
  );
};

export default Books;