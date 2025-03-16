import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleAddToReadingTime = (id, time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='max-w-6xl mt-5 mx-auto'>
      <Navbar></Navbar>
      <div className='lg:flex md:flex gap-2'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
          handleAddToReadingTime={handleAddToReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
