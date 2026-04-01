import React, { Suspense } from "react";
import Book from "../Book/Book";


const Books = ({data}) => {
//   console.log(data);
  // const [allBooks,setAllBooks]=useState([])
  // useEffect(()=>{
  //     fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
  //     .then(res=>res.json())
  //     .then(data=>setAllBooks(data))
  // },[])
//   const bookPromise=fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
//   .then(res=>res.json());
  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books is here</h1>
      <Suspense fallback={<span>Loading....</span>}>
     {
        data.map((singleBook=> <Book singleBook={singleBook}></Book>))
     }
      </Suspense>
    </div>
  );
};

export default Books;
