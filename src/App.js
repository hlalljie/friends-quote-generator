import './App.css';
import React from 'react';

var colors = [
  {color: "#42a2d6", background: "dark", name: "lightblue"}, // lightblue
  {color: "#fff580", background: "dark", name: "tan"}, // tan
  {color: "#00009e", background: "color", name: "blue"}, // blue
  {color: "#9a0006", background: "color", name: "red"}, // red
  {color: "#ffdc00", background: "dark", name: "yellow"}, // yellow
  {color: "#a876e6", background: "dark", name: "violet"},// violet
  {color: "#ff4238", background: "dark", name: "orange"}  // orange
] 
var quotes = [
  {quote: "HOW YOU DOIN?", author: "Joey Tribbiani"},
  {quote: "I’m not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing"},
  {quote: "Well, maybe I don’t need your money. Wait, wait, I said maybe!", author: "Rachel Green"},
  {quote: "We were on a break!", author: "Ross Geller"},
  {quote: "See? He’s her lobster.", author: "Pheobe Buffay"},
  {quote: "Joey doesn’t share food!", author: "Joey Tribbiani"},
  {quote: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.", author: "Chandler Bing"},
  {quote: "I wish I could, but I don’t want to.", author: "Pheobe Buffay"},
  {quote: "And I have to live with a boy!", author: "Monica Geller"}
];
var images = {
  "Joey Tribbiani": {image: "https://images.entertainment.ie/uploads/2021/05/27152450/Joey-Tribbiani-best-Friends-character.jpg?w=1280&h=768&q=high", borderColor: colors.red},
  "Chandler Bing": {image: "https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg", borderColor: colors.blue},
  "Monica Geller": {image: "https://i.insider.com/5c8279ebeb3ce821ef1247a2?width=1500", borderColor: colors.lightblue},
  "Rachel Green": {image: "https://i.pinimg.com/736x/9b/e8/dc/9be8dcb0e1a9a8f0c080d798be3cdb58.jpg", borderColor: colors.violet},
  "Ross Geller": {image: "https://i.insider.com/5a7e1faeaee63c28008b468e?width=700", borderColor: colors.orange},
  "Pheobe Buffay": {image: "https://staticg.sportskeeda.com/editor/2021/12/8def6-16405297121221-1920.jpg", borderColor: colors.tan}
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
      quoteIndex: Math.floor(Math.random() * (quotes.length))-1,
      colorIndex: 0
    }
    this.handleNewRandomQuote = this.handleNewRandomQuote.bind(this);
    this.handleNewRandomQuote();
  }

  handleNewRandomQuote(){
    this.setState((function(prevState){
      //Find Random Quote Index
      let randQuoteNum = Math.floor(Math.random() * (quotes.length-1));
      if (randQuoteNum >= prevState.quoteIndex){
        randQuoteNum++;
      }
      if (randQuoteNum >= quotes.length){
        randQuoteNum = quotes.length % randQuoteNum;
      }
      // Find Random Border color index
      let randColorNum = Math.floor(Math.random() * (colors.length-1));
      if (randColorNum >= prevState.colorIndex){
        randColorNum++;
      }
      if (randColorNum >= colors.length){
        randColorNum = colors.length % randColorNum;
      }
      return {
        quoteIndex: randQuoteNum,
        colorIndex: randColorNum
      };
    }));
  }

  render() {
    let renderQuote = quotes[this.state.quoteIndex];
    
    // Quote Props
    let quote = renderQuote.quote;
    let author = renderQuote.author

    // Image props
    let currentColor = colors[this.state.colorIndex];
    let currentImage = images[renderQuote.author].image;
    let imgAlt = renderQuote.author + " from Friends TV show";

    return (
      <div className="quote-box" id="quote-box">
        <div className="text-image-container">
          <QuoteText quote={quote} author={author}/>
          <Portrait currentBorderColor={currentColor.color} currentImage={currentImage} imgAlt={imgAlt} />
        </div>
        <NewQuoteButton clickFunction={this.handleNewRandomQuote} hoverColor={currentColor}/>
      </div>
    );
  }
};

function QuoteText(props) {
  return (
    <div className="quote-text">
      <h3 className="quote" id="text">{props.quote}</h3>
      <p className="author" id="author">{props.author}</p>
    </div>
  )
}

function Portrait(props) {
  return (
    <div className="portrait-container" style={{borderColor: props.currentBorderColor}}>
      <div className="portrait-wrapper">
        <img className="portrait-image" src={props.currentImage} alt={props.imgAlt}/>
      </div>
    </div>
  );
}

class NewQuoteButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(){
    this.setState({hover: !this.state.hover});
  }

  render(){
    
    let styles = {color: "#fff",  backgroundColor: "rgba(0, 0, 0, .5)", borderColor: "#fff"};

    if (this.state.hover){
      let currentColor = this.props.hoverColor.color;
      let currentBackgroundColor = styles.backgroundColor;
      //let currentBackgroundColor = this.props.hoverColor.backgroundColor;
      let currentBorderColor = this.props.hoverColor.color;

      if (this.props.hoverColor.background == "color"){
        currentBackgroundColor = this.props.hoverColor.color;
        currentColor = "#fff";
        currentBorderColor = "#fff";
      }

      styles = {color: currentColor,  backgroundColor: currentBackgroundColor, borderColor: currentBorderColor};
    }
    return (
      <div className='quoteButtonContainer'>
        <button className="newQuoteButton" id="new-quote" style={styles} onClick={this.props.clickFunction} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>NEW QUOTE</button>
      </div>
    );
  }
}


export default App;
