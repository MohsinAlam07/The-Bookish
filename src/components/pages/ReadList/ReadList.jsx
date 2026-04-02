import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../../utility/addToDB';

const ReadList = () => {
const [readList,setReadList]=useState([]);

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
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i Read{readList.length}</h2>
    </TabPanel>
    <TabPanel>
      <h2>Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;