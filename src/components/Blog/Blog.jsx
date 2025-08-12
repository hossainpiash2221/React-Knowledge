
import PropTypes from 'prop-types';
import { FaRegBookmark  } from "react-icons/fa";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {

    const {title,cover,author, author_img,posted_date,reading_time,hashtags} = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8 ' src={cover} alt="" />
            <div className='flex justify-between items-center mb-8'>
                <div className='flex'>
                        <img className='w-14' src={author_img} alt="" />
                        <div className='ml-2'>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                </div>
                <div className='items-center flex'>
                    <span>{reading_time} min read </span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-red-600 text-2xl items-center cursor-pointer'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                hashtags.map((hashtag,idx) => <span key={idx}><a href="">{hashtag}</a></span>)
            }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-500 underline font-bold'>Mark As read</button>
        </div>
    );
};

// Blog.propTypes = {
//     blog.PropTypes.object.isRequired
// }

export default Blog;