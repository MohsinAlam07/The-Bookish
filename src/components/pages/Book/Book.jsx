import React, { use } from 'react';

const Book = ({singleBook}) => {
    // const data=use(bookPromise);
    // console.log(data)
    console.log(singleBook)
    return (
        <div>
            <h1>Single book</h1>
        </div>
    );
};

export default Book;