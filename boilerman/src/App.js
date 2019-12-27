import React, {Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AuctionItem from './AuctionItem';
import AddAuctionItem from './AddAuctionItem';

class App extends Component {
  state={
    AuctionItems: [
      { name:"Karl 1", bids:21, id:1, score:0 },
      { name:"Karl 2", bids:21, id:2, score:0},
      { name:"Karl 3", bids:201, id:3, score:0},
    ]
  }


  addAuctionItem = (item) =>{
    item.id = Math.random();
    let items = [...this.state.AuctionItems, item];
    this.setState({
      AuctionItems: items
    })
    console.log("line 23 of App is"+item)
  }

  deleteAuctionItem = (id) => {
      console.log(id);
      let auctionItems = this.state.AuctionItems.filter(item => {
        return item.id!==id
      });
      this.setState({
        AuctionItems: auctionItems
      });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <AuctionItem AuctionItems={this.state.AuctionItems} deleteAuctionItem={this.state.deleteAuctionItem} name="Auction" />
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
          <AddAuctionItem addAuctionItem={this.addAuctionItem} />
        </header>
       
      </div>
    );
  }
}

export default App;
