import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body}=  post;
    const navigate = useNavigate();

    const handleNAvigation = () => {

        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h3>{title}</h3>
           <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNAvigation}>With button handler</button>

        </div>
    );
};

export default Post;