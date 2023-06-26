import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <div className="NavContainer">
    <div>Logo</div>
    <ul>
      <li><Link to="/">Rocket</Link></li>
      <li><Link to="/Mission">Mission</Link></li>
      <li><Link to="/Dragon">Dragon</Link></li>
      <li><Link to="/MyProfile">My Profile</Link></li>
    </ul>
  </div>
);

export default NavBar;
