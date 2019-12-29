import React from 'react';
import Rainbow from '../hoc/rainbow';

const About = () => {
  // setTimeout(() =>{
  //   props.history.push('/contact');
  // },30000);
  return (
    <div className="container">
      <h4 className="center">
      About
      </h4>
      <p> Silent Auctioning App</p>
    </div>
  )
}

export default Rainbow(About);