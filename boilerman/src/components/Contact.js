import React from 'react';
import {withRouter} from 'react-router-dom'
const Contact = (props) => {
  console.log(props) 
  // setTimeout(() =>{
  //   props.history.push('/home');
  // },30000);

  return (
    <div className="container">
      <h4 className="center">
       Contact
      </h4>
      <div><a href="https://github.com/angiechangpagne"> Github </a></div><p></p>
      <div><a href="https://www.angiechangpagne.com"> Website </a></div><p></p>
      <div><a href="https://chrome.google.com/webstore/detail/project-artemis/gpncgocimlpojfgbphndpjgkkhdjhnpb?authuser=0"> Open Source Artemis Developer Tool</a></div><p></p>
      <div><a href="https://medium.com/artemis-labs-open-source"> Publications </a></div><p> </p>
    </div>
  )
}

export default Contact;