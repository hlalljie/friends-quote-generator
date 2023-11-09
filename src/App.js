import './App.css';
import React from 'react';

var colors = {
  lightblue: "#42a2d6",
  tan: "#fff580",
  blue: "#00009e",
  red: "#9a0006",
  yellow: "#ffdc00",
  violet: "#a876e6",
  orange: "#ff4238"
}
var quotes = [
  {quote: "HOW YOU DOIN?", author: "Joey Tribbiani"},
  {quote: "I’m not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing"}
];
var images = {
  "Joey Tribbiani": {image: "https://static.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg", borderColor: colors.red},
  "Chandler Bing": {image: "https://kaplan.co.uk/images/default-source/insights/chandler-bing.jpg", borderColor: colors.blue}
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
    this.setState((function(prevState){
      let randNum = Math.floor(Math.random() * (quotes.length-1));
      if (randNum >= prevState.quoteIndex){
        randNum++;
      }
      if (randNum >= quotes.length){
        randNum = quotes.length % randNum;
      }
      console.log(randNum);
      return {quoteIndex: randNum};
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
          <div className="portrait-container" style={{borderColor: images[renderQuote.author].borderColor}}>
            <div className="portrait-wrapper">
              <img className="portrait-image" src={images[renderQuote.author].image}/>
            </div>
          </div>
        </div>
        <div className='quoteButtonContainer'>
          <button className="newQuoteButton" id="new-quote" onClick={this.handleNewRandomQuote}>NEW QUOTE</button>
        </div>
      </div>
    );
  }
};


export default App;
