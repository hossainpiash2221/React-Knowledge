import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 bg-sky-200 p-2 m-4'>
            <h3>Reading Time:{readingTime}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }   
            
        </div>
    );
};

export default Bookmarks;