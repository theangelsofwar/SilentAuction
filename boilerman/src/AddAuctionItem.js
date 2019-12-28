import React, { Component } from 'react';

class AddAuctionItem extends Component {
  state = {
    name: null,
    description: "SS20",
    bids: 0,
    score: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("line 18 of addAuctionItem is "+this.state);
    this.props.addAuctionItem(this.state);
  }
  render (){
    return (  
      <div> 
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/>
          <label htmlFor="description"> Description:</label>
          <input type="text" id="description" onChange={this.handleChange}/>
          <label htmlFor="bids"> Bids:</label>
          <input type="text" id="bids" onChange={this.handleChange}/>
          <label htmlFor="score"> Score:</label>
          <input type="text" id="score" onChange={this.handleChange}/>
          <button> Submit</button>
        </form>
      </div>
    )
  }
}

export default AddAuctionItem