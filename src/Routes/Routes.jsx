import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../components/pages/Root/Root';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);