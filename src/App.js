import React, {useState} from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';
import "./css/App.css";

function App() {
  let sampletweet1 = {content:'hello',author:'ko',date:'918ce',likes:3,retweets:1}
  let sampletweet2 = {content:'hi',author:'salami',date:'2020',likes:1,retweets:5}
  let tweetArr = [sampletweet1,sampletweet2]
  const [inputStateContent, setInputStateContent] = useState('');
  const [inputStateAuthor, setInputStateAuthor] = useState('');
  const [inputStateDate, setInputStateDate] = useState('');
  const [Array, setArray] = useState(tweetArr);
  // const [filter, setFilter] = useState("");
  const submit = () => {
    if (inputStateContent.length > 0 && inputStateAuthor.length > 0 && inputStateDate.length > 0) {
      setArray(tweetArr => [...tweetArr,{content: inputStateContent, author: inputStateAuthor, date: inputStateDate, likes:0, retweets:0}])
      setInputStateContent("");
      setInputStateAuthor("");
      setInputStateDate("");
    };
  };
  // const filtertweets = () => {
  //   for (const element in Array){
  //     if (element.content === (filter)){
  //       return(
  //         true
  //       )
  //     }
  //     else{
  //       Array.splice(Array[element],1)
  //     }
  //   }
  // }
  return (
    <div className = "bg">
      <Header />
      <Body />
      <input type="text" value = {inputStateContent} onChange={e => setInputStateContent(e.target.value)}/>
      <input type="text" value = {inputStateAuthor} onChange={e => setInputStateAuthor(e.target.value)}/>
      <input type="text" value = {inputStateDate} onChange={e => setInputStateDate(e.target.value)}/>
      {/* <input type="text" value = {filter} onChange={e => setFilter(e.target.value)}/> */}
      <button type = 'submit' onClick={submit}>SUBMIT</button>
      {/* <button type = 'submit' onClick={filtertweets}>FILTER</button> */}
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
