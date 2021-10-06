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
          title={'Title1'}
          content = {'Content1'}
          author = {"Author1"}
          date = {'Date1'}
          likes = {"Likes1"}
          retweets = {"Retweets1"}
          trending = {false} />
        <Tweets 
          title={'Title2'}
          content = {'Content2'}
          author = {"Author2"}
          date = {'Date2'}
          likes = {"Likes2"}
          retweets = {"Retweets2"}
          trending = {true} />
      </div>
    </div>
  );
}

export default App;
