
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  return (
    <div className='max-w-6xl mt-5 mx-auto'>
      <Navbar></Navbar>
      <div className='lg:flex md:flex gap-2'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
