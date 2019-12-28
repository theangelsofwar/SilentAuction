import React from 'react';
import {withRouter} from 'react-router-dom';
import Rainbow from '../hoc/rainbow';

const About = (props) => {
  // setTimeout(() =>{
  //   props.history.push('/contact');
  // },30000);
  return (
    <div className="container">
      <h4 className="center">
      About

      </h4>
      <p> Silent Bidding App</p>
    </div>
  )
}

export default Rainbow(About);