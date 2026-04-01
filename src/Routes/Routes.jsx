import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../components/pages/Root/Root';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import Home from '../components/pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
           loader: ()=>fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'),
            path:"/",
            Component:Home
        }
    ]
  },
]);