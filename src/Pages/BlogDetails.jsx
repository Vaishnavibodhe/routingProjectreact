import React from 'react'
import {useLocation} from 'react-router-dom';
import Header from '../Common/Header';
const BlogDetails = () => { //use for dynamic routing
    let uselocation=useLocation();//this useLocation function is routers inbulid 
    //gives all details of  url data eg...id index..
    //useLocation.pathname will give us only pathname
    //.split will divide path  in array so we can use single index and get data 
//[2] means in that aray where is our id located
    console.log(uselocation.pathname.split('/')[2]);
  return (
    <div>
        <Header/>
    </div>
  )
}

export default BlogDetails