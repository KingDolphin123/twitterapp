import React from 'react'
import "./Styles.css"


const Tweets = props => {
    return ( 
        <div className="tweetname">
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