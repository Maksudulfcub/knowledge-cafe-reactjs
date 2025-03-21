import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark,handleAddToReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h3 className="text-xl font-bold mb-5 text-blue-700 p-4 lg:p-0">Total Blogs : {blogs.length}</h3>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleAddToReadingTime={handleAddToReadingTime}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;