import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
class Home extends Component {
  state = {
    posts:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(res=> {
      console.log("res in line 8 of Home is ",res);
      this.setState({
        posts: res.data.slice(0,10)
      });
    })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ?  
      (posts.map(post => {
        return (
          <div className="post card" key={post.id}> 
            <div className="card-content">
              <Link to={ '/' + post.id}>
                <span className="card-title grey-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
      )
    })
    ) : (
      <div className="center"> No Bids Yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">
          Home 
        </h4>
        <p> Current Live Bids: </p>
        {postList}
      </div>
    )
  }
}

export default Home;