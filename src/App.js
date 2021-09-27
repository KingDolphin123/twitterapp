import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Tweets 
        title={'Title1'}
        content = {'Content1'}
        author = {"Author1"}
        date = {'Date1'}
        likes = {"Likes1"}
        retweets = {"Retweets1"} />
      <Tweets 
        title={'Title2'}
        content = {'Content2'}
        author = {"Author2"}
        date = {'Date2'}
        likes = {"Likes2"}
        retweets = {"Retweets2"} />
    </div>
  );
}

export default App;
