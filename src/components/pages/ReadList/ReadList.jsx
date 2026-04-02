import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../../utility/addToDB';

const ReadList = () => {
const [readList,setReadList]=useState([]);
const [sort,setSort]=useState("");
const handleSort=(type)=>{
  setSort(type);
  if(type==="pages"){
    const sortedByPages=[...readList].sort((a,b)=>a.totalPages-b.totalPages);
    setReadList(sortedByPages);
  }
  if(type==="ratings"){
    const sortedByRatings=[...readList].sort((a,b)=>a.rating-b.rating);
    setReadList(sortedByRatings);
  }

}

    const data=useLoaderData();
    // console.log(data)
    useEffect(()=>{
        const storedBookData=getStoredBook();
        const ConvertedStoredBooks=storedBookData.map(id=>parseInt(id));
        const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    },[])
    return (
        <div>
          <details className="dropdown">
  <summary className="btn m-1">Sort By:{sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("ratings")}>Rating</a></li>
  </ul>
</details>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i Read: {readList.length}</h2>
        {
    readList.map(book => (
      <div key={book.bookId} className="border p-4 my-3 rounded">
        <h3 className="text-xl font-bold">{book.bookName}</h3>
        <p>Author: {book.author}</p>
        <img src={book.image} alt="" className="w-32" />
      </div>
    ))
  }
     
    </TabPanel>
    <TabPanel>
      <h2>Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;