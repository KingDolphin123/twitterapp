import React, {useState} from 'react'
import "../css/Tweets.css"

const Tweets = props => {
    const [likes,setLikes] = useState('False');
    const [retweet,setRetweet] = useState('False');
    if (retweet === 'False') {
        if(likes === 'False') {
            return ( 
                <div className ="tweets">
                    <p>{props.title}</p>
                    <p>{props.content}</p>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                    <p>{props.likes}</p>
                    <p>{props.retweets}</p>
                    <h1>Liked?: {likes}</h1>
                    <input type='image' name = 'Add Like' src='1whiteheart.png' alt = 'whiteheart' onClick={()=>{
                        setLikes('True')
                    }}/>
                    <h1>Retweeted?: {retweet}</h1>
                    <button onClick={()=>{
                        setRetweet('True')
                    }}>Retweet</button>
                </div>
            ); 
        }
        if(likes==='True'){
            return ( 
                <div className ="tweets">
                    <p>{props.title}</p>
                    <p>{props.content}</p>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                    <p>{props.likes}</p>
                    <p>{props.retweets}</p>
                    <h1>Liked?: {likes}</h1>
                    <input type='image' name = 'Add Like' src='1redheart.png' alt = 'redheart' onClick={()=>{
                        setLikes('False')
                    }}/>
                    <h1>Retweeted?: {retweet}</h1>
                    <button onClick={()=>{
                        setRetweet('True')
                    }}>Retweet</button>
                </div>
            ); 
        }
    }
    else if (retweet === 'True') {
        if(likes === 'False') {
            return ( 
                <div className ="tweets">
                    <p>{props.title}</p>
                    <p>{props.content}</p>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                    <p>{props.likes}</p>
                    <p>{props.retweets}</p>
                    <h1>Liked?: {likes}</h1>
                    <input type='image' name = 'Add Like' src='1whiteheart.png' alt = 'whiteheart' onClick={()=>{
                        setLikes('True')
                    }}/>
                    <h1>Retweeted?: {retweet}</h1>
                    <button onClick={()=>{
                        setRetweet('False')
                    }}>Undo Retweet</button>
                </div>
            ); 
        }
        if(likes==='True'){
            return ( 
                <div className ="tweets">
                    <p>{props.title}</p>
                    <p>{props.content}</p>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                    <p>{props.likes}</p>
                    <p>{props.retweets}</p>
                    <h1>Liked?: {likes}</h1>
                    <input type='image' name = 'Add Like' src='1redheart.png' alt = 'redheart' onClick={()=>{
                        setLikes('False')
                    }}/>
                    <h1>Retweeted?: {retweet}</h1>
                    <button onClick={()=>{
                        setRetweet('False')
                    }}>Undo Retweet</button>
                </div>
            ); 
        }
    }
}
export default Tweets;