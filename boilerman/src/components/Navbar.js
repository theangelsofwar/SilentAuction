import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  // console.log(props)
  // setTimeout(() =>{
  //   props.history.push('/about');
  // },300000);
  return (
    <nav className="nav-wrapper yellow lighten-2">
      <div className="container">
        <Link className="brand-logo"> Silent Auction</Link>
        <ul className="right">
          <li> <NavLink to="/"> Home</NavLink></li>
          <li> <NavLink to="/about"> About</NavLink></li>
          <li> <NavLink to="/contact"> Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
