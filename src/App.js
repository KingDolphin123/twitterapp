import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';
import "./css/App.css";

function App() {
  let sampletweet1 = {content:'hello',author:'koryo',date:'918ce',likes:3,retweets:1}
  let sampletweet2 = {content:'ayhaab',author:'saleem',date:'2020',likes:1,retweets:5}
  let tweetArr = [sampletweet1,sampletweet2]
  const tweetArray = tweetArr.map((tweet,i) => {
    return <Tweets key={i} content={tweet.content} author={tweet.author} date={tweet.date} likes={tweet.likes} retweets={tweet.retweets}/>
  });
  
  return (
    <div className = "bg">
      <Header />
      <Body />
      <div className="app">
          {tweetArray}
      </div>
    </div>
  );
};

export default App;
