import React, {useState} from 'react'
import "../css/Tweets.css"
import whiteheart from "../css/whiteheart.png"
import blueheart from "../css/blueheart.png"

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
            <div>
                <h1>Liked: {likes? "True":"False"}</h1>
                <h1>Retweeted: {retweet? "True":"False"}</h1>
                <div className = 'buttons'>
                    <p> </p>
                    {retweet ? <button className = 'button' onClick={()=>{setRetweet(false)}}>Undo Retweet</button> : <button className = 'button' onClick={()=>{setRetweet(true)}}>Retweet</button>}
                    {likes ? <input className = 'image' type='image' name = 'Add Like' src={blueheart} alt = 'redheart' onClick={()=>{setLikes(false)}}/> : <input className = 'image' type='image' name = 'Add Like' src={whiteheart} alt = 'whiteheart' onClick={()=>{setLikes(true)}}/>}
                    {trending ? <button className = 'button' onClick={()=>{setTrending(false)}}>make not trending</button> : <button className = 'button' onClick={()=>{setTrending(true)}}>make trending</button>}
                    <p> </p>
                </div>
            </div>
        </div>
    )   
}
export default Tweets;