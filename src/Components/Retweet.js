import React, {useState} from 'react'
import "../css/Tweets.css"

const Retweet = () =>{
    const [retweet,setRetweet] = useState('False');
    if (retweet === 'False') {
        return ( 
            <div className='tweets'>
                <h1>Retweeted?: {retweet}</h1>
                <button onClick={()=>{
                    setRetweet('True')
                }}>Retweet</button>
            </div>
        ); }
    else if (retweet === 'True'){
        return ( 
            <div className="tweets">
                <h1>Retweeted?: {retweet}</h1>
                <button onClick={()=>{
                    setRetweet('False')
                }}>Undo Retweet</button>
            </div>
        ); 
    }
}
export default Retweet;