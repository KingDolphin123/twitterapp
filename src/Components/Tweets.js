import React, {useState} from 'react'
import "../css/Tweets.css"
import whiteheart from "../css/1whiteheart.png"
import redheart from "../css/1redheart.png"

const Tweets = props => {
    const [likes,setLikes] = useState(false);
    const [retweet,setRetweet] = useState(false);
    const [trending,setTrending] = useState(props.trending);
    return (
        <div className ="tweets">
            <p className = 'tweettitle'>{props.title}</p>
            <p className = 'tweetcontent'>{props.content}</p>
            <p className = 'tweetauthor'>{props.author}</p>
            <p className = 'tweetdate'>{props.date}</p>
            <p className = 'tweetlikes'>{props.likes}</p>
            <p className = 'tweetretweets'>{props.retweets}</p>
            <p className = 'tweettrending'>Trending: {trending? "Yes":"No"}</p>
            <div className = 'buttons'>
                <h1>Liked: {likes? "True":"False"}</h1>
                {likes ? <input className = 'image' type='image' name = 'Add Like' src={redheart} alt = 'redheart' onClick={()=>{setLikes(false)}}/> : <input className = 'image' type='image' name = 'Add Like' src={whiteheart} alt = 'whiteheart' onClick={()=>{setLikes(true)}}/>}
                <h1>Retweeted: {retweet? "True":"False"}</h1>
                {retweet ? <button className = 'button' onClick={()=>{setRetweet(false)}}>Undo Retweet</button> : <button className = 'button' onClick={()=>{setRetweet(true)}}>Retweet</button>}
                <h1>Trending: {trending? "True":"False"}</h1>
                {trending ? <button className = 'button' onClick={()=>{setTrending(false)}}>make not trending</button> : <button className = 'button' onClick={()=>{setTrending(true)}}>make trending</button>}
            </div>
        </div>
    )   
}
export default Tweets;