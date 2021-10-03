import React, {useState} from 'react'
import "../css/Tweets.css"

const Tweets = props => {
    const [likes,setLikes] = useState(0);
    const [retweet,setRetweet] = useState('False');
    if (retweet === 'False') {
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
                <h1>Retweeted?: {retweet}</h1>
                <button onClick={()=>{
                    setRetweet('True')
                }}>Retweet</button>
            </div>
        ); }
    else if (retweet === 'True'){
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
                <h1>Retweeted?: {retweet}</h1>
                <button onClick={()=>{
                    setRetweet('False')
                }}>Undo Retweet</button>
            </div>
        ); 
    }
};

export default Tweets;