import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, useId, body}= post;
    const navigate =useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h2>
                Details About your post of {id}
            </h2>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
            
        </div>
    );
};

export default PostDetail;