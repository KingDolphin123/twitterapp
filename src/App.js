import React, {useState} from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';
import "./css/App.css";

function App() {
  let sampletweet1 = {content:'hello',author:'koryo',date:'918ce',likes:3,retweets:1}
  let sampletweet2 = {content:'ayhaab',author:'saleem',date:'2020',likes:1,retweets:5}
  let newtweet = {content:'',author:'',date:'',likes:3,retweets:1};
  let tweetArr = [sampletweet1,sampletweet2]
  const [inputStateContent, setInputStateContent] = useState('');
  const [inputStateAuthor, setInputStateAuthor] = useState('');
  const [inputStateDate, setInputStateDate] = useState('');
  const [Array, setArray] = useState(tweetArr);
  const changeHandler1 = (e) => {
    setInputStateContent(e.target.value);
  };
  const changeHandler2 = (e) => {
    setInputStateAuthor(e.target.value);
  };
  const changeHandler3 = (e) => {
    setInputStateDate(e.target.value);
  };
  const submit = () => {
    if (inputStateContent.length > 0 && inputStateAuthor.length > 0 && inputStateDate.length > 0) {
      newtweet.content = {inputStateContent};
      setInputStateContent("");
      newtweet.author = {inputStateAuthor};
      setInputStateAuthor("");
      newtweet.date = {inputStateDate};
      setInputStateDate("");
      setArray([...tweetArr,newtweet])
    }
  }
  return (
    <div className = "bg">
      <Header />
      <Body />
      <input type="text" value = {inputStateContent} onChange={changeHandler1}/>
      <input type="text" value = {inputStateAuthor} onChange={changeHandler2}/>
      <input type="text" value = {inputStateDate} onChange={changeHandler3}/>
      <button type = 'submit' onClick={submit}>SUBMIT</button>
      <p>{inputStateContent}{inputStateAuthor}{inputStateDate}</p>
      <div className="app">
          {Array.map((tweet,i) => (
            <Tweets key={i+1} content={tweet.content} author={tweet.author} date={tweet.date} likes={tweet.likes} retweets={tweet.retweets}/>
          ))}
      </div>
    </div>
  );
};

export default App;
