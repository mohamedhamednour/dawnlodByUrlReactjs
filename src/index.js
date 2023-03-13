import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Serch from './components/Serch';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Book from './components/Book';
import Geolocation from './components/GetLocation';

const router = createBrowserRouter([
      {
        path: "/",
        element: (
            <App />
        ),
        children: [
          { index: true, element: <Serch />  },
          { path: "books", element: <Book /> },
          { path: "geolocation", element: <Geolocation /> },

          

       
        ],
      },
    ]);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <RouterProvider router={router} />
      // <React.StrictMode>   // i romve it becouse this ruern mulite render to use effect when start app by StrictMode return two call use effact here i dont need development i use it in production build
    );
    