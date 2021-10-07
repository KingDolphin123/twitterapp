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
          title={'Wang Kŏn'}
          content = {'Becomes king of Taebong in 918, He is important because he achieved “true national unification” by uniting the Korean peninsula under Koryo. His name means king and establisher. He had 29 wives to cement central power.'}
          author = {"Koryo"}
          date = {'918'}
          likes = {"3"}
          retweets = {"1"} />
        <Tweets 
          title={'Benjamin "Jimnyoung" Oh changes name to Jimin'}
          content = {'Today, Benjamin "Jimnyoung" Oh legally changed his name to Jimin. Finally the people are happy :)'}
          author = {"Mahmoud Bin Saleem"}
          date = {'10/2/21'}
          likes = {"9002"}
          retweets = {"851"} />
        <Tweets 
          title={'Title3'}
          content = {'Content3'}
          author = {"Author3"}
          date = {'Date3'}
          likes = {"4"}
          retweets = {"2"} />
      </div>
    </div>
  );
}

export default App;
