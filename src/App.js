import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';
import "./css/App.css";

function App() {
  return (
    <div className = "bg">
      <Header />
      <Body />
      <div className="app">
        <Tweets 
          title={'DEEZ!'}
          content = {'nuts'}
          author = {"on"}
          date = {'your'}
          likes = {"chin"}
          retweets = {"LOL!"}
          trending = {false} />
        <Tweets 
          title={'Title2'}
          content = {'Content2'}
          author = {"Mahmoud Bin Saleem"}
          date = {'Date2'}
          likes = {"Likes2"}
          retweets = {"Retweets2"}
          trending = {true} />
        <Tweets 
          title={'Title3'}
          content = {'Content3'}
          author = {"Author3"}
          date = {'Date3'}
          likes = {"Likes3"}
          retweets = {"Retweets3"}
          trending = {false} />
      </div>
    </div>
  );
}

export default App;
