import React, {useState} from 'react'
import "../css/Tweets.css"

const Tweets = props => {
    const [likes,setLikes] = useState(0)
    return ( 
        <div className="tweets">
            <p>{props.title}</p>
            <p>{props.content}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.likes}</p>
            <p>{props.retweets}</p>
            <h1>Likes: {likes}</h1>
            <button onClick={()=>{
                setLikes(likes+1)
            }}>Add LIKe</button>
            <button onClick={()=>{
                setLikes(likes-1)
            }}>Delete Like</button>
        </div>
    );
};

export default Tweets;