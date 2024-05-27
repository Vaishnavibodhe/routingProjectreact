import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './Pages/About';
import Home from './Pages/Home';
import Course from './Pages/Course';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Error from './Pages/Error';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';

const root=ReactDOM.createRoot(document.getElementById('root'));
let allRoutes =createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'About-us',
      element:<About/>
    },
    {
      path:'Course',
      element:<Course/>
    },
    {
      path:'blog',
      element:<Blog/>
    },
    {
      path:'blog/:id',//this is for dynamic routing
      element:<BlogDetails/>
    },
    {
      path:'*', //if we do any mistake writing url then this error page will open
      element:<Error/>
    }
   
  ]
)
root.render(
  <React.StrictMode>
   <RouterProvider router={allRoutes}></RouterProvider>
  
  </React.StrictMode>,
);
