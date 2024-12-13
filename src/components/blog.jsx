import React from 'react'
import blog_img from '../assets/blog.png'

const Blog = () => {
  return (
    <>
      <nav className='flex justify-between shadow-md p-2'>
        <div className='flex'>
          <img className='w-10' src={blog_img} alt="" />
          <h1 className='text-3xl font-semibold'>My Blogs</h1>
        </div>
        <button className='border-2 rounded-2xl font-medium bg-pink-300 w-20 hover:bg-pink-400'>Create</button>
      </nav>
    </>
  )
}

export default Blog
 