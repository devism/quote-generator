import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import  {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Anime, {anime} from 'react-anime';
import data from './data/data.json';

let quotes = data;

let randomQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];

// let animate = '360deg';
let animate = '0deg';
function App() {
 
  const [quote, setQuote] = useState(randomQuote.quote);
  const [quoteAuthor, setAuthor] = useState(randomQuote.author);
  const [quoteImage, setImage] = useState(randomQuote.image);
  // const [animate, setAnimate] = useState('0deg');

  const newQuote = () => {
    let randomQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
    setQuote(randomQuote.quote)
    setAuthor(randomQuote.author)
    setImage(randomQuote.image)

    if(animate == '0deg'){
      animate = '360deg';
    } else {
      animate = '0deg';
    }

    // setAnimate('360deg');
    // console.log(animate);
  }
  
  
  const tweet = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote) + ' -' + encodeURIComponent(quoteAuthor);

  
  return (
    <Anime translateY={'2em'} rotate={animate}>
    <div id="quote-box" className="wrapper">
      <div id="text"></div>
      <p className="quote" id="quote">{quote}</p>
      <p id="author"> - {quoteAuthor}</p>
      <img src={quoteImage}/>
      <div>
        <button id="new-quote" className="new-quote-btn" onClick={newQuote}>
          New Quote
        </button>
        
        <a target="_blank" className="twitter-share-button" href={tweet} id="tweet-quote"> <FontAwesomeIcon icon={faTwitter} /> Tweet Quote</a>
      </div>
    </div> 
    </Anime>
    )
}

export default App;
