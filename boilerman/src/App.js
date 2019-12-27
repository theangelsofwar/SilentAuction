import React, {Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AuctionItem from './AuctionItem'
class App extends Component {
  state={
    AuctionItems: [
      { name:"Karl 1", bids:21, id:1},
      { name:"Karl 2", bids:21, id:2},
      { name:"Karl 3", bids:21, id:3},

    ]
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <AuctionItem AuctionItems={this.state.AuctionItems} name="Auction" bids="21" />
          <img src="" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
