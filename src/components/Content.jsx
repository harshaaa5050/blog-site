import React, { useContext } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Context } from '../App'
import blog_img from '../assets/blog.png'

const Content = () => {

    const { id } = useParams();
    const { blogItems } = useContext(Context);
    const blog = blogItems[id];

    if (!blog) {
        return <p>Blog not found!</p>;
    }

    return (
        <>
            <nav className='flex justify-between shadow-md p-2'>
                <div className='flex'>
                    <img className='w-10' src={blog_img} alt="" />
                    <h1 className='text-3xl font-semibold'>My Blogs</h1>
                </div>

                <NavLink to="/blogs" className='flex items-center justify-center border-2 rounded-2xl font-medium bg-pink-300 w-20 hover:bg-pink-400'>Go Back</NavLink>
            </nav>

            <div className='flex items-center justify-center h-[630px]'>
                <div className='bg-pink-300 w-3/6 h-[500px] rounded-2xl shadow-xl flex flex-col p-5'>
                    <h2 className='text-2xl font-semibold'>{blog.title}</h2>
                    <p className='mt-3'>{blog.body}</p>
                </div>
            </div>

        </>
    )
}

export default Content
