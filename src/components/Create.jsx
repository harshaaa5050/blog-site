import React from 'react'
import blog_img from '../assets/blog.png'

const Create = () => {
    return (
        <>
            <nav className='flex justify-between shadow-md p-2'>
                <div className='flex'>
                    <img className='w-10' src={blog_img} alt="" />
                    <h1 className='text-3xl font-semibold'>My Blogs</h1>
                </div>
                <button className='border-2 rounded-2xl font-medium bg-pink-300 w-20 hover:bg-pink-400'>Submit</button>
            </nav>


            <div className='flex items-center justify-center h-[630px]'>
                <div className='bg-pink-300 w-3/6 h-[500px] rounded-2xl shadow-xl flex flex-col p-5'>
                
                    <input type="text" placeholder='Enter your blog title' className='bg-transparent border-white outline-white rounded-2xl p-2 m-2' />
                    
                    <textarea name="content" id="content" rows={18} className='p-3 outline-none rounded-2xl m-2 bg-pink-100'></textarea>

                </div>
            </div>
        </>
    )
}

export default Create
