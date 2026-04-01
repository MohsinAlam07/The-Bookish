import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../components/pages/Root/Root';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
           loader: ()=>fetch('bookData.json'),
            path:"/",
            Component:Home
        },
        {
          path:'/about',
          Component:About
        }
    ]
  },
]);