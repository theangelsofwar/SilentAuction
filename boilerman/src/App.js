import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './AuctionItem.css';
import AuctionItem from './AuctionItem';
import AddAuctionItem from './AddAuctionItem';
import WatchItems from './WatchItems'
class App extends Component {
  state={
    AuctionItems: [
      { name:"Karl 1", description:"AW 17", bids:21, id:1, score:0 },
      { name:"Karl 2", description:"AW 18",bids:21, id:2, score:0 },
      { name:"Karl 3", description:"SS 18",bids:201, id:3, score:0 },
    ],
    WatchItems: [
      {

      }
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
        return item.id !== id
      });
      this.setState({
        AuctionItems: auctionItems
      });
  }


  componentDidMount(){
    console.log("Component Mounted line 39 of App");
  }


  componentDidUpdate(prevProps,prevState){
    console.log("component did update line 44 of App");
    console.log("prevProp:",prevProps);
    console.log("prevState",prevState);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <AuctionItem AuctionItems={this.state.AuctionItems} deleteAuctionItem={this.deleteAuctionItem} name="Auction" />
          <img src="" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="www.mischiff.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <AddAuctionItem addAuctionItem={this.addAuctionItem} />
        </header>
        <p> <WatchItems watchItems={this.state.WatchItems} /></p>
       
      </div>
    );
  }
}

export default App;
