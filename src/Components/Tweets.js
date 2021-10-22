import React, {useState} from 'react'
import "../css/Tweets.css"
import whiteheart from "../css/whiteheart.png"
import blueheart from "../css/blueheart.png"

const Tweets = props => {
    const [likes,setLikes] = useState(false);
    const [retweet,setRetweet] = useState(false);
    const [trending,setTrending] = useState(parseInt(props.likes)>1000? true:false);
    const [numlikes, setnumlikes] = useState(props.likes);
    const [numretweets, setnumretweets] = useState(props.retweets);
    return (
        <div className ="tweets">
            <div className = 'authordateflex'>
                <p className = 'tweetheader tweetauthor'>{props.author}</p>
                <p className = 'tweetheader dash'>-</p>
                <p className = 'tweetheader tweetdate'>{props.date}</p>
            </div>
            <div className = 'content'>
                <p className = 'tweetcontent'>{props.content}</p>
            </div>
            <div className = 'buttondata'>                
                <p className = 'tweetlikes'>{numlikes}</p>
                <p className = 'tweetretweets'>{numretweets}</p>
                <p className = 'tweettrending'>Trending: {trending? "Yes":"No"}</p>
            </div>
            <div>
                <div className = 'buttons'>
                    <p> </p>
                    {retweet ? <button className = 'button' onClick={()=>{setRetweet(false);setnumretweets(numretweets-1)}}>Undo Retweet</button> : <button className = 'button' onClick={()=>{setRetweet(true);setnumretweets(numretweets+1)}}>Retweet</button>}
                    {likes ? <input className = 'image' type='image' name = 'Add Like' src={blueheart} alt = 'redheart' onClick={()=>{setnumlikes(numlikes-1);setLikes(false)}}/> : <input className = 'image' type='image' name = 'Add Like' src={whiteheart} alt = 'whiteheart' onClick={()=>{setnumlikes(numlikes+1);setLikes(true)}}/>}
                    {trending ? <button className = 'button' onClick={()=>{setTrending(false)}}>make not trending</button> : <button className = 'button' onClick={()=>{setTrending(true)}}>make trending</button>}
                    <p> </p> 
                </div>
            </div>
        </div>
    )   
}
export default Tweets;
