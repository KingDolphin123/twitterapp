import React from 'react'

const Tweets = props => {
    return ( 
        <div>
            <p>{props.title}</p>
            <p>{props.content}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.likes}</p>
            <p>{props.retweets}</p>
        </div>
    );
};

export default Tweets;