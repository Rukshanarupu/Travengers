import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProviders';
import Blog from './Pages/Blog/Blog';
import ErrorPage from './Pages/Shared/ErrorPage';
import BlogDetails from './Pages/Blog/BlogDetails';
import Destination from './Pages/Destination/Destination';
import Booking from './Pages/Booking/Booking';
import Hotels from './Pages/Hotels/Hotels';
import About from './Pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage/>,
    children: [
     {
      path : '/',
      element: <Home></Home>
     },
     {
      path : 'about',
      element: <About></About>
     },
     {
      path : 'blogs',
      element: <Blog></Blog>,
      loader: ()=> fetch('http://localhost:5000/blog')
     },
      {
       path : 'blog-details/:id',
       element: <BlogDetails></BlogDetails>,
       loader: ({params})=> fetch(`http://localhost:5000/blog/${params.id}`)
      },
     {
      path : 'destinations',
      element: <Destination></Destination>,
      loader: ()=> fetch("http://localhost:5000/destinations")
     },
     {
      path : 'destination/:id',
      element: <Booking></Booking>,
      loader: ({params})=> fetch(`http://localhost:5000/destination/${params.id}`)
     },
     {
      path: 'hotels',
      element: <Hotels></Hotels>
     },
     {
      path: 'login',
      element: <Login></Login>
     },
     {
      path: 'register',
      element: <Register></Register>
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
