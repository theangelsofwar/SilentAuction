import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import './AuctionItem.css';
import AuctionItem from './AuctionItem';
import AddAuctionItem from './AddAuctionItem';
import WatchItems from './WatchItems';
import AddWatchItem from './AddWatchItem';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

import Karl from './assets/karl.png'
class App extends Component {
  state = {
    AuctionItems: [
      { name:"Celine", description:"AW 17", bids:21, id:1, score:11 },
      { name:"Hugo Boss", description:"AW 18",bids:21, id:2, score:9 },
      { name:"Saint Laurent", description:"SS 18",bids:20, id:3, score:0 },
    ],
    WatchItems: [
        { name:"Karl 1", description:"AW 17", content:"AW 17 Was most profitable business season with highest Design turnover rate, keep an eye out"},
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

  deleteWatchItem= (id) => {
    const WatchItems = this.state.WatchItems.filter(item => {
      return item.id !== id;
    });
    this.setState({
      WatchItems
      //no key val necessary if the same variable name
    });
  }

  addWatchItem = (item) => {
    item.id = Math.random();
    let WatchItems = [...this.state.WatchItems, item];
    this.setState({
      WatchItems
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

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/:post_id' component={Post} />
        </Switch>
        </BrowserRouter>
        <header className="App-header">
        
          <AuctionItem AuctionItems={this.state.AuctionItems} deleteAuctionItem={this.deleteAuctionItem} name="Auction" />
          <img src={Karl} className="App-logo" alt="logo" />
          <p>
               <code> Silent Art Auction</code> 
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
        <div id="wanted" className="watchlist container">  
          <h1> Wanted List</h1>
          <WatchItems watchItems={this.state.WatchItems} deleteWatchItem={this.deleteWatchItem} />
          <AddWatchItem addWatchItem={this.addWatchItem} />
        </div>
       <p></p><p></p>
       <hr/>
       <footer> Lunar Developers, LLP </footer>
      </div>
    );
  }
}

export default App;
