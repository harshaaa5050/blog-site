import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../App';
import blog_img from '../assets/blog.png'

const Blog = () => {

  const { blogItems } = useContext(Context);

  return (
    <>
      <nav className='flex justify-between shadow-md p-2'>
        <div className='flex'>
          <img className='w-10' src={blog_img} alt="" />
          <h1 className='text-3xl font-semibold'>My Blogs</h1>
        </div>

        <NavLink to="/createblog" className='flex items-center justify-center border-2 rounded-2xl font-medium bg-pink-300 w-20 hover:bg-pink-400'>Create</NavLink>
      </nav>

      <div>
        {blogItems.map((blog) => (
          <div key={blog.id} className='border rounded'>
              <NavLink to = {`/blogs/${blog.id}`} className="hover:underline font-medium text-xl p-3 mt-4">
                  {blog.title}
              </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
 