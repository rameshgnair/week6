// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY

var App = React.createClass({

  getInitialState: function(){
    return{
      hand: window.getDeck(),
    }
  },


  deal: function(cards,e){

    this.replaceState({

    })
  },


  render: function() {

    var cards = window.getDeck();
    cards.shuffle()

    return (

      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">

          <Card value={cards[0]}/>
          <Card value={cards[1]}/>
          <Card value={cards[2]}/>
          <Card value={cards[3]}/>
          <Card value={cards[4]}/>

          <div className="col-sm-2">
            <h1><a href="#" onClick={this.deal} className="btn btn-success">Deal</a></h1>
          </div>
        </div>
      </div>
    )
  }
})


var Card = React.createClass({
  render: function() {
    return(
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.value+ ".png"} /></h1>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
