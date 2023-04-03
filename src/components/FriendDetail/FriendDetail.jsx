import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h4> Name: {friend.name}</h4>
            <h4> Name: {friend.phone}</h4>
            <h4> Name: {friend.email}</h4>
        </div>
    );
};

export default FriendDetail;