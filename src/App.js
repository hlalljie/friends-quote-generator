import './App.css';

function App() {
  return (
    <div id="app">
      <QuoteBox />
    </div>
  );
}

var quotes = [{quote: "How you doin?", author: "Joey Trevioni"}]
var images = {"Joey Trevioni": "https://static.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg/revision/latest?cb=20180424154245"}
function QuoteBox() {
  return (
    <div className="quote-box" id="quote-box">
      <h3 className="quote">{quotes[0].quote}</h3>
      <p className="author">{quotes[0].author}</p>
      <img src="https://static.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg"/>
    </div>
  );
}

export default App;
