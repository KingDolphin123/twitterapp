import React, { useState, useEffect } from 'react'
import "../css/Tweets.css"
import whiteheart from "../css/whiteheart.png"
import blueheart from "../css/blueheart.png"
import {random} from 'mathjs'
import axios from 'axios'

const Tweets = props => {
    const [likes, setLikes] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [trending, setTrending] = useState(parseInt(props.likes) > 1000 ? true : false);
    const [numlikes, setnumlikes] = useState(props.likes);
    const [numretweets, setnumretweets] = useState(props.retweets);
    // let author = 'hlgkjfjhg';
    useEffect(()=>{
        let rand = random()
        if (rand>=.5){
        setTimeout(()=> setnumlikes((numlikes => numlikes + 1), setLikes(true)), 1000)
        }
    }, [])
    const [predage, setpredage] = useState('');

    useEffect(()=>{
        axios.get("https://api.agify.io/?name="+props.authorstr).then(response => setpredage(response.data.age))
    },[props.author])
    return (
        <div className="tweets">
            <div className='authordateflex'>
                <p className='tweetheader tweetauthor'>{props.authorstr} - {predage}</p>
                <p className='tweetheader dash'>-</p>
                <p className='tweetheader tweetdate'>{props.date}</p>
            </div>
            <div className='content'>
                <p className='tweetcontent'>{props.content}</p>
            </div>
            <div className='buttondata'>
                <p className='tweetlikes'>{numlikes}</p>
                <p className='tweetretweets'>{numretweets}</p>
                <p className='tweettrending'>Trending: {trending ? "Yes" : "No"}</p>
            </div>
            <div>
                <div className='buttons'>
                    <p> </p>
                    {retweet ? <button className='tbutton' onClick={() => { setRetweet(false); setnumretweets(numretweets - 1) }}>Undo Retweet</button> : <button className='tbutton' onClick={() => { setRetweet(true); setnumretweets(numretweets + 1) }}>Retweet</button>}
                    {likes ? <input className='image' type='image' name='Add Like' src={blueheart} alt='redheart' onClick={() => { setnumlikes(numlikes - 1); setLikes(false) }} /> : <input className='image' type='image' name='Add Like' src={whiteheart} alt='whiteheart' onClick={() => { setnumlikes(numlikes + 1); setLikes(true) }} />}
                    {trending ? <button className='tbutton' onClick={() => { setTrending(false) }}>make not trending</button> : <button className='tbutton' onClick={() => { setTrending(true) }}>make trending</button>}
                    <p> </p>
                </div>
            </div>
        </div>
    )
}
export default Tweets;
