import React, { Component } from 'react'

class AddWatchItem extends Component {
  state = {
    //nest an Auction Item component to the state, then go and add a note for content about why it's on the hit list
    content:''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value 
    }); //closure of set State
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addWatchItem(this.state);
    this.setState({
      content:''
    })
  }
  render(){
    return (
      <div> 
      <h4> | Low Risk | High Yield |</h4>
        <form onSubmit={this.handleSubmit}>
          <label> Add to Wanted List: </label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddWatchItem