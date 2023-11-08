import './App.css';

function App() {
  return (
    <div id="app">
      <QuoteBox />
    </div>
  );
}

var quotes = [{quote: "HOW YOU DOIN?", author: "Joey Trevioni"}]
var images = {"Joey Trevioni": "https://static.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg"}
function QuoteBox() {
  return (
    <div className="quote-box" id="quote-box">
      <div className="quote-text">
        <h3 className="quote">{quotes[0].quote}</h3>
        <p className="author">{quotes[0].author}</p>
      </div>
      <div className="portrait-container">
        <img className="portrait-image" src={images[quotes[0].author]}/>
      </div>
    </div>
  );
}

export default App;
