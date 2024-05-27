import React from 'react'
import Header from '../Common/Header';
import {Blogs} from '../Data/Blogs';
const Blog = () => {
    //we are gettingall data from blogs component for design 
    let allBlogs=Blogs.map((v,i)=>{ //we are maping data frm blogs array
        
        return(//this v,i is b coz we r getting data from another variable
        <div className="blog2" key={i}> 
        <h3> {v.title}</h3>
        <p>
           
            {v.body}
        </p>
        <button><a href={`/blog/${v,i}`}>Read More</a></button>
        </div>
        )

    })
  return (
    <>
    <Header/>
    <h2>Blog Page</h2>
    <div className="blog1">
       {allBlogs}
        
    </div>
    </>
  )
}

export default Blog