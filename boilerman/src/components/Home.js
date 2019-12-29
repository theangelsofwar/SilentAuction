import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  // state = {
  //   posts:[]
  // }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts/')
  //   .then(res=> {
  //     console.log("res in line 8 of Home is ",res);
  //     this.setState({
  //       posts: res.data.slice(0,10)
  //     });
  //   })
  // }
  render(){
    console.log(this.props);
    const { posts } = this.props;
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
          Current Live Bids:
        </h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);