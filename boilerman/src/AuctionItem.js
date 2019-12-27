import React from 'react';
import './AuctionItem.css'
const AuctionItem =({AuctionItems, deleteAuctionItem})=>{
  
    // const { name, bids }=this.props;
    // const { AuctionItems, deleteAuctionItem } = props;
    // const auctionList = AuctionItems.map(item => {
    //   if(item.bids<200){
    //   return (
    //      <div className="auctionItem" key={item.id}>
    //     <div>
    //       Name: Auction Item 
    //       <div> Name: {item.name} </div>
    //       <div> Bids: {item.bids} </div>
    //     </div>
    //   </div>
    //   )
    //   }
    //   else{
    //     return null;
    //   }
    // })
    const auctionList = AuctionItems.map(item => {
      return item.bids<200 ? (
          <div className="auctionItem" key={item.id}>
           <div>
         Name: Auction Item 
         <div> Name: {item.name} </div>
          <div> Bids: {item.bids} </div>
          <div> Score: {item.score} </div>
          <button onClick={() => {deleteAuctionItem(item.id)}}>Delete Item</button>
        <hr />
        </div>
      </div>
      ) : null;
    })
    console.log(this)
    return(
      <div className="auction-list" >





        { auctionList }
      </div>
    );
}


export default AuctionItem