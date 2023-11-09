import './App.css';
import React from 'react';

var quotes = [
  {quote: "HOW YOU DOIN?", author: "Joey Tribbiani"},
  {quote: "I’m not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing"}
];
var images = {
  "Joey Tribbiani": "https://static.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg",
  "Chandler Bing": "https://kaplan.co.uk/images/default-source/insights/chandler-bing.jpg"
}
function App() {
  return (
    <div id="app">
      <QuoteBox />
    </div>
  );
}



class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0
    }
    this.handleNewRandomQuote = this.handleNewRandomQuote.bind(this);
  }

  handleNewRandomQuote(){
    console.log("random quote generating");
    this.setState(state => ({
      quoteIndex: Math.floor(Math.random() * quotes.length)
    }));
  }

  render() {
    console.log ("In render, quote = " + this.state.quoteIndex);
    let renderQuote = quotes[this.state.quoteIndex];
    return (
      <div className="quote-box" id="quote-box">
        <div className="text-image-container">
          <div className="quote-text">
            <h3 className="quote" id="text">{renderQuote.quote}</h3>
            <p className="author" id="author">{renderQuote.author}</p>
          </div>
          <div className="portrait-container">
            <div className="portrait-wrapper">
              <img className="portrait-image" src={images[renderQuote.author]}/>
            </div>
          </div>
        </div>
        <div>
          <button className="newQuoteButton" id="new-quote" onClick={this.handleNewRandomQuote}>New Quote</button>
        </div>
      </div>
    );
  }
};
/*
function QuoteBox() {
  return (
    <div className="quote-box" id="quote-box">
      <div className="text-image-container">
        <div className="quote-text">
          <h3 className="quote" id="text">{currentQuote.quote}</h3>
          <p className="author" id="author">{currentQuote.author}</p>
        </div>
        <div className="portrait-container">
          <div className="portrait-wrapper">
            <img className="portrait-image" src={images[currentQuote.author]}/>
          </div>
        </div>
      </div>
      <div>
        <button className="newQuoteButton" id="new-quote" onClick={newRandomQuote()}>New Quote</button>
      </div>
    </div>
  );
}*/

export default App;
