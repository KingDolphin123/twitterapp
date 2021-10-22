import React, {useState} from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import Tweets from './Components/Tweets';
import "./css/App.css";

function App() {
  let sampletweet1 = {content:'hello',author:'ko',date:'918ce',likes:3,retweets:1};
  let sampletweet2 = {content:'hi',author:'salami',date:'2020',likes:1,retweets:5};
  let tweetArr = [sampletweet1,sampletweet2];
  let filterArray1 = [];
  const [inputStateContent, setInputStateContent] = useState('');
  const [inputStateAuthor, setInputStateAuthor] = useState('');
  const [inputStateDate, setInputStateDate] = useState('');
  const [Array, setArray] = useState(tweetArr);
  const [filter, setFilter] = useState("");
  const [filterArray, setFilterArray] = useState(filterArray1);
  const [filterBool, setFilterBool] = useState(false);
  const [filterempty, setFilterEmpty] = useState(false);
  const submit = () => {
    if (inputStateContent.length > 0 && inputStateAuthor.length > 0 && inputStateDate.length > 0) {
      setArray(tweetArr => [...tweetArr,{content: inputStateContent, author: inputStateAuthor, date: inputStateDate, likes:1000, retweets:0}])
      setInputStateContent("");
      setInputStateAuthor("");
      setInputStateDate("");
    };
  };

  const filterfunc = (e) => {
    if (e.content.includes(filter)){
      return true;
    }
    else{
      return false;
    }
  }
  const filtertweets = () => {
    let filteredtweets = Array.filter(filterfunc)
    setFilterBool(!filterBool);
    if (filteredtweets.length === 0){
      setFilterEmpty(true);
    }
    else {
      setFilterEmpty(false);
    }
    setFilterArray(filteredtweets);
    setFilter('');
  }
  return (
    <div className = "bg">
      <Header />
      <Body />
      <div className = 'bodybody'>
        <div className = "tweetfilter">
          <input placeholder = 'Enter Filter..' className = 'filterinput' type="text" value = {filter} onChange={e => setFilter(e.target.value)}/>
          {filterBool? <button className = 'inputbutton' type = 'submit' onClick={filtertweets}>UNFILTER</button>:<button className = 'inputbutton' type = 'submit' onClick={filtertweets}>FILTER</button>}
        </div>
        <div className = 'tweetinput'>
          <input placeholder = 'Enter content..' className = 'input' type="text" value = {inputStateContent} onChange={e => setInputStateContent(e.target.value)}/>
          <input placeholder = 'Enter Author..' className = 'input' type="text" value = {inputStateAuthor} onChange={e => setInputStateAuthor(e.target.value)}/>
          <input placeholder = 'Enter Date' className = 'input' type="text" value = {inputStateDate} onChange={e => setInputStateDate(e.target.value)}/>
          <button className = 'inputbutton' type = 'submit' onClick={submit}>SUBMIT</button>
        </div>
        <div className="app">
          {filterempty? "no tweets to show":(filterBool?
            (filterArray.map((tweet,i) => (
              <Tweets key={i+1} content={tweet.content} author={tweet.author} date={tweet.date} likes={tweet.likes} retweets={tweet.retweets}/>
            ))):
            (Array.map((tweet,i) => (
              <Tweets key={i+1} content={tweet.content} author={tweet.author} date={tweet.date} likes={tweet.likes} retweets={tweet.retweets}/>
            )))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
