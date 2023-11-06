import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [data, setData] = useState([])

const fetchInfo = () => {
return fetch("https://type.fit/api/quotes")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  setData(data);
});
}
useEffect(() => {
	fetchInfo();
}, [])

const quoteText = data.filter(quote => quote.text); 
const renderQuote = quoteText.map((quote) => <p key={quote.text}>{quote.text}</p>); 
const quoteAuthor = data.filter(quote => quote.author); 
const renderAuthor = quoteAuthor.map((quote) => <p key={quote.author}>{quote.author.slice(0,-10)}</p>); 
const randomSelector = Math.floor(Math.random() * 16)

  return (
 
    <div className="App" id='quote-box'>

      <header className="App-header">
      Random Quotations 
      <h2>
      <center>
        <div>
          <p style={{ fontFamily: "Arial", fontSize: 50, color: 'white' }}>"</p>
          <p id='text' style={{ fontSize: 50, color: 'white' }} >{renderQuote[randomSelector]}</p>
          <p style={{ fontSize: 50, color: 'white' }}>"</p>
          <p id='author'style={{ fontSize: 20, color: 'white' }} >{renderAuthor[randomSelector]}</p>
          </div>
      </center>
      </h2>

        <button id='new-quote' onClick={fetchInfo}>
          next
        </button>
        <button>
        <a
          id="tweet-quote"
          className="button"
          href="https://twitter.com"
          target="_top"
          rel=" "
        >tweet this
        </a>
        </button>
        
      </header>
    </div>
  );
}

export default App;

