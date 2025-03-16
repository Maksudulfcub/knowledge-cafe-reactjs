import React from 'react';

const Blog = ({ blog }) => {

    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div>
            <div className='mb-10 lg:w-3/5 lg:p-10 p-4 justify-center rounded-xl shadow-xl hover:bg-amber-50'>
                <img className='rounded-xl' src={cover} alt="" />
                <div className='lg:flex justify-between mt-2'>
                    <div className='flex items-center gap-5'>
                        <img className='w-16' src={author_img} alt="" />
                        <div>
                            <h3 className='text-xl font-bold'>{author}</h3>
                            <p className='text-gray-500'>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm font-semibold text-gray-500'>{reading_time} min read</p>
                        <span>
                            <img src="../../../public/images/reading-icon.png" alt="" />
                        </span>
                    </div>
                </div>
                <h2 className='text-3xl font-bold mt-3'>{title}</h2>
                <div className='flex gap-3 mt-3 text-gray-500'>
                    <p>#{hashtags[0]}</p>
                    <p>#{hashtags[1]}</p>
                </div>
                <button className='text-blue-700 underline font-semibold mt-3'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;