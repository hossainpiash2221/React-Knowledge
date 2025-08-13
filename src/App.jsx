
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleAddToBookmark = blog  => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    //remove bookmark for click on read button
      const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookmarks(remainingBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto'>
         <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
         <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
