import './App.css';
import React from 'react';

var colors = [
  {color: "#42a2d6", buttonColor: "color", name: "lightblue"}, // lightblue
  {color: "#fff580", buttonColor: "color", name: "tan"}, // tan
  {color: "#00009e", buttonColor: "rgb(76 76 237)", name: "blue"}, // blue
  {color: "#9a0006", buttonColor: "rgb(193 58 63)", name: "red"}, // red
  {color: "#ffdc00", buttonColor: "color", name: "yellow"}, // yellow
  {color: "#a876e6", buttonColor: "color", name: "violet"},// violet
  {color: "#ff4238", buttonColor: "color", name: "orange"}  // orange
] 
var quotes = [
  {quote: "HOW YOU DOIN?", author: "Joey Tribbiani"},
  {quote: "This is all a moo point", author: "Joey Tribbiani"},
  {quote: "What's not to like?", author: "Joey Tribbiani"},
  {quote: "You've been BAMBOOZLED!", author: "Joey Tribbiani"},
  {quote: "Well, the fridge broke, so I had to eat everything", author: "Joey Tribbiani"},
  {quote: "If I had to, I'd pee on any one of you!", author: "Joey Tribbiani"},
  {quote: "I'm curvy and I like it!", author: "Joey Tribbiani"},
  {quote: "That's Like Fourth Of July Without Apple Pie", author: "Joey Tribbiani"},
  {quote: "These are just feelings. They’ll go away.", author: "Joey Tribbiani"},
  {quote: "Over the line? You’re so far past the line that you can’t even see the line! The line is a dot to you!", author: "Joey Tribbiani"},
  {quote: "You can’t just give up! Is that what a dinosaur would do?", author: "Joey Tribbiani"},
  {quote: "I like it. What’s not to like? Custard? Good. Jam? Good. Meat? Good.", author: "Joey Tribbiani"},
  {quote: "Here come the meat sweats.", author: "Joey Tribbiani"},
  {quote: "Joey doesn’t share food!", author: "Joey Tribbiani"},
  {quote: "You hung up on the pizza place? I don’t hang up on your friends.", author: "Joey Tribbiani"},
  {quote: "I’m not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing"},
  {quote: "I'm funny, right?", author: "Chandler Bing"},
  {quote: "I'm Hopeless And Awkward And Desperate For Love" , author: "Chandler Bing"},
  {quote: "I say more dumb things before 9 a.m. than most people say all day", author: "Chandler Bing"},
  {quote: "You make me happier than I ever thought I could be and if you let me, I will spend the rest of my life trying to make you feel the same way", author: "Chandler Bing"},
  {quote: "What must it be like not to be crippled by fear and self-loathing?", author: "Chandler Bing"},
  {quote: "I’m not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing"},
  {quote: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.", author: "Chandler Bing"},
  {quote: "When I first meet somebody it's usually panic, anxiety, and a great deal of sweating", author: "Chandler Bing"},
  {quote: "And I have to live with a boy!", author: "Monica Geller"},
  {quote: "I needed a plan, a plan to get over my man. And what's the opposite of man? Jam.", author: "Monica Geller"},
  {quote: "Now, I need you to be careful and efficient. And remember: If I am harsh with you, it's only because you're doing it wrong.", author: "Monica Geller"},
  {quote: "If you're too afraid to be in a relationship, then don't be in one.", author: "Monica Geller"},
  {quote: "Why didn't you make a copy and keep it in a fireproof box and keep it at least a hundred yards from the original?", author: "Monica Geller"},
  {quote: "Having a heart attack is nature's way of telling you to slow down.", author: "Monica Geller"},
  {quote: "Do you really think the best reason to get married is because you're sorry?", author: "Monica Geller"},
  {quote: "Here's the last of your boxes. I'm just going to label it 'What were you thinking?", author: "Monica Geller"},
  {quote: "Well, maybe I don’t need your money. Wait, wait, I said maybe!", author: "Rachel Green"},
  {quote: "No uterus, no opinion.", author: "Rachel Green"},
  {quote: "Why can’t parents just stay parents, you know? Why do they have to become people?", author: "Rachel Green"},
  {quote: "Oh, I’m sorry. Did my back hurt your knife?", author: "Rachel Green"},
  {quote: "You know what? I just shouldn’t be allowed to make decisions anymore.", author: "Rachel Green"},
  {quote: "I can be very generous, or very stingy.", author: "Rachel Green"},
  {quote: "He's so pretty, I want to cry.", author: "Rachel Green"},
  {quote: "How do we end up with these jerks? We're good people.", author: "Rachel Green"},
  {quote: "I'm gonna go get one of those job things.", author: "Rachel Green"},
  {quote: "Does this look like something the girlfriend of a paleontologist would wear?", author: "Rachel Green"},
  {quote: "Everyone I know is either getting married or getting pregnant...", author: "Rachel Green"},
  {quote: "Oh my God. I've become my father. I've been trying so hard not to become my mother, I didn't see this coming.", author: "Rachel Green"},
  {quote: "I can be very generous, or very stingy.", author: "Rachel Green"},
  {quote: "It’s like all my life everyone’s told me, ‘You’re a shoe! You’re a shoe! You’re a shoe!", author: "Rachel Green"},
  {quote: "We were on a break!", author: "Ross Geller"},
  {quote: "Pivot!", author: "Ross Geller"},
  {quote: "My Best Friend And My Sister?!", author: "Ross Geller"},
  {quote: "Ah Love. L-O-V-E Love", author: "Ross Geller"},
  {quote: "It Tastes Like Feet!", author: "Ross Geller"},
  {quote: "Unagi is a total state of awareness.", author: "Ross Geller"},
  {quote: "I'm An 8!", author: "Ross Geller"},
  {quote: "I’m FINE!", author: "Ross Geller"},
  {quote: "My SANDWICH!", author: "Ross Geller"},
  {quote: "All of which proves that I thought of Jurassic Park first.", author: "Ross Geller"},
  {quote: "Y’know what? I’m gonna go out on a limb and say no divorces in ‘99!", author: "Ross Geller"},
  {quote: "See? He’s her lobster.", author: "Phoebe Buffay"},
  {quote: "If You Want To Receive Emails About My Upcoming Shows, Then Please Give Me Money So I Can Buy A Computer.", author: "Phoebe Buffay"},
  {quote: "Well, You Know I May Have Relatives In France Who Would Know. My Grandmother Said She Got The Recipe From Her Grandmother, 'Nestley Toulouse'.", author: "Phoebe Buffay"},
  {quote: "Come On, Ross, You're A Paleontologist. Dig A Little Deeper.", author: "Phoebe Buffay"},
  {quote: "You'll See. You'll All See.", author: "Phoebe Buffay"},
  {quote: "Oh, You Like That? You Should Hear My Phone Number.", author: "Phoebe Buffay"},
  {quote: "They Don't Know That We Know They Know We Know.", author: "Phoebe Buffay"},
  {quote: "Smelly Cat, Smelly Cat, What are they feeding you?", author: "Phoebe Buffay"},
  {quote: "I wish I could, but I don’t want to.", author: "Phoebe Buffay"}
];
var images = {
  "Joey Tribbiani": [
    "https://images.entertainment.ie/uploads/2021/05/27152450/Joey-Tribbiani-best-Friends-character.jpg?w=1280&h=768&q=high",
    "https://s2.r29static.com/bin/entry/6e3/x/1767399/image.png",
    "https://imgix.bustle.com/uploads/image/2023/9/5/25b6077a-c032-4343-ba3d-e7c3269a626b-joey.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2",
    "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/joey-tribiani-friends.jpg",
    "https://staticg.sportskeeda.com/editor/2022/02/5fb5a-16445164342625-1920.jpg?w=840",
    "https://i.pinimg.com/originals/74/98/19/749819389e26e0061d97dffde921a39c.jpg",
    "https://i.pinimg.com/originals/d3/b5/6d/d3b56da32a57bf28a604485986247c14.jpg"
  ],
  "Chandler Bing": [
    "https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg",
    "https://pyxis.nymag.com/v1/imgs/5fa/e29/c77102139bd5a89e44c227152d9b39609c-chandler-friends-the-one-where-everyone-.rhorizontal.w700.jpg",
    "https://ew.com/thmb/e_g6HOWIUcV07T5oDmQWznMcCD4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/matthew-perry-friends-102823-2-983c4a9614984bffa036ac658dafb9fe.jpg",
    "https://media.distractify.com/brand-img/bVlrtBV98/0x0/chandler-bing-sweet-moments-friends-1554481072692.jpg",
    "https://i.pinimg.com/736x/43/ce/35/43ce35dcd7f335432ba85999e00e7739.jpg",
    "https://www.looper.com/img/gallery/friends-what-is-chandlers-job/intro-1696992140.jpg",
    "https://miro.medium.com/v2/resize:fit:1400/1*MOLjvPFGqbbZ_5qYlr11BA.png",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/matthew-pery-as-chandler-on-friends.jpg",

  ],
  "Monica Geller": [
    "https://i.insider.com/5c8279ebeb3ce821ef1247a2?width=1500",
    "https://cdn.cliqueinc.com/posts/286494/best-friends-outfits-286494-1585661261042-image.700x0c.jpg",
    "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/03/monica-geller-29_1200x630.jpg",
    "https://people.com/thmb/yOdQWjekLS_Ly83aug5O6wmIfUI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(299x0:301x2)/courteney-cox-c523dcfb9fcd45f38bbd277953478bdc.jpg",
    "https://images.entertainment.ie/uploads/2021/05/25161201/monica-geller-friends-door-1563283330.jpg?w=640&h=384&q=high",
    "https://flipscreenblog.files.wordpress.com/2019/02/image4.png?w=970",
    "https://hips.hearstapps.com/hmg-prod/images/monica-dress-friends-1621506568.jpg?crop=0.9111375976691829xw:1xh;center,top"
  ],
  "Rachel Green": [
    "https://i.pinimg.com/736x/9b/e8/dc/9be8dcb0e1a9a8f0c080d798be3cdb58.jpg",
    "https://imgix.bustle.com/uploads/image/2022/11/17/dc2648bf-a757-444c-b04a-16688dd7da5b-videoscreenshot-hbo-s5e21theonewiththeball-334.jpg?w=300&h=400&fit=crop&crop=faces&auto=format%2Ccompress",
    "https://cdn.shopify.com/s/files/1/0199/5512/2276/files/5f3649d527b9ca70651c83e1e10c75d3_480x480.jpg?v=1686011410",
    "https://dc29cyz5aq10h.cloudfront.net/app/img/journal/rachel-green-hair-best-hair.jpg?ver=2019-11-29-15-45-41",
    "https://i.pinimg.com/736x/d3/9e/9d/d39e9d4f786530ab552358e57f3efff0.jpg"
  ],
  "Ross Geller": [
    "https://i.insider.com/5a7e1faeaee63c28008b468e?width=700",
    "https://m.media-amazon.com/images/M/MV5BMTkxNjU3MjU3NF5BMl5BanBnXkFtZTgwMzcxMzYzMzE@._V1_UY1200_CR485,0,630,1200_AL_.jpg",
    "https://i0.wp.com/www.ourmovielife.com/wp-content/uploads/2020/03/unagi.jpg?resize=800%2C500&ssl=1",
    "https://i2-prod.mirror.co.uk/incoming/article13468656.ece/ALTERNATES/s1200c/4_RLP_MDG_071216ROSS_31JPG.jpg",
    "https://i.pinimg.com/736x/4d/9f/9e/4d9f9e15e08ca186aa839f940b70370f.jpg",
    "https://prod-accessonline-be.s3-us-west-2.amazonaws.com/uploads/2022/11/RossUnagi.png"
  ],
  "Phoebe Buffay": [
    "https://staticg.sportskeeda.com/editor/2021/12/8def6-16405297121221-1920.jpg",
    "https://imgix.bustle.com/rehost/2016/9/13/c9e38185-9873-4dd9-82eb-6d873280415e.png?w=800&fit=crop&crop=faces&auto=format%2Ccompress",
    "https://i.insider.com/55df18389dd7cc0f008b64cc?width=1000&format=jpeg&auto=webp",
    "https://i0.wp.com/www.ourmovielife.com/wp-content/uploads/2020/03/phoebe.png?resize=800%2C500&ssl=1",
    "https://youthincmag.com/wp-content/uploads/2022/09/phoebe-buffay.jpg",
    
  ]
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
      colorIndex: 0,
      imageIndex: 0
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

      // Find Random Image color index
      let numImages = images[quotes[randQuoteNum].author].length;
      let randImageNum = Math.floor(Math.random() * (numImages-1));
      if (randImageNum >= prevState.imageIndex){
        randImageNum++;
      }
      if (randImageNum >= numImages){
        randImageNum = numImages % randImageNum;
      }
      return {
        quoteIndex: randQuoteNum,
        colorIndex: randColorNum,
        imageIndex: randImageNum
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
    let currentImage = images[renderQuote.author][this.state.imageIndex];
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
    
    let styles = {color: "#fff",  backgroundColor: "#000", borderColor: "#fff"};

    if (this.state.hover){
      styles = {color: this.props.hoverColor.color,  backgroundColor: "#000", borderColor: this.props.hoverColor.color};
      if (this.props.hoverColor.buttonColor != "color"){
        styles = {color: this.props.hoverColor.buttonColor,  backgroundColor: "#000", borderColor: this.props.hoverColor.buttonColor};
      }
    }

    return (
      <div className='quoteButtonContainer'>
        <button className="newQuoteButton" id="new-quote" style={styles} onClick={this.props.clickFunction} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>NEW QUOTE</button>
      </div>
    );
  }
}


export default App;
