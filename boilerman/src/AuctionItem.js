import React, { Component } from 'react';

class AuctionItem extends Component{
  render(){
    // const { name, bids }=this.props;
    const { AuctionItems } = this.props;
    const auctionList = AuctionItems.map(item => {
      return (
         <div className="auctionItem" key={item.id}>
        <div>
          Name: Auction Item 
          <div> Name: {item.name} </div>
          <div> Bids: {item.bids} </div>
        </div>
      </div>
      )
    })
    console.log(this)
    return(
      <div className="auction-list" >
        { auctionList }
      </div>
    )
  }
}


export default AuctionItem