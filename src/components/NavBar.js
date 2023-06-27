import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Logo from './assets/planet_bigger.png';
import NavStyles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();
  const rocketLinkStyle = (pathname) => {
    if (pathname === '/rockets' || pathname === '/' || pathname === '') {
      return `${NavStyles.linksStyles} ${NavStyles.mr1} ${NavStyles.active}`;
    }
    return `${NavStyles.linksStyles} ${NavStyles.mr1}`;
  };

  const missionsLinkStyle = (pathname) => {
    if (pathname === '/mission') {
      return `${NavStyles.linksStyles} ${NavStyles.mr1} ${NavStyles.active}`;
    }
    return `${NavStyles.linksStyles} ${NavStyles.mr1}`;
  };

  const dragonLinkStyle = (pathname) => {
    if (pathname === '/dragon') {
      return `${NavStyles.linksStyles} ${NavStyles.borderRight} ${NavStyles.active}`;
    }
    return `${NavStyles.linksStyles} ${NavStyles.borderRight}`;
  };

  const myProfileLinkStyle = (pathname) => {
    if (pathname === '/myprofile') {
      return `${NavStyles.linksStyles} ${NavStyles.ml1} ${NavStyles.active}`;
    }
    return `${NavStyles.linksStyles} ${NavStyles.ml1}`;
  };

  return (
    <Stack className={NavStyles.navbarContainer}>
      <div className={NavStyles.logoContainer}>
        <NavLink to="/">
          <img src={Logo} alt="" className={`${NavStyles.logo} ${NavStyles.mr1}`} />
        </NavLink>
        <h1>Space Travelers&apos; HUB</h1>
      </div>
      <Nav activeKey="/" className={NavStyles.linksContainer}>
        <Nav.Item><Nav.Link as={NavLink} to="/" exact="true" className={rocketLinkStyle(location.pathname)}>Rockets </Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={NavLink} to="/mission" className={missionsLinkStyle(location.pathname)}>Missions</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={NavLink} to="/dragon" className={dragonLinkStyle(location.pathname)}>Dragon</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={NavLink} to="/myprofile" className={myProfileLinkStyle(location.pathname)}>My Profile</Nav.Link></Nav.Item>
      </Nav>
    </Stack>
  );

/*   <div className="NavContainer">
    <div>Logo</div>
    <ul>
      <li><Link to="/">Rocket</Link></li>
      <li><Link to="/Mission">Mission</Link></li>
      <li><Link to="/Dragon">Dragon</Link></li>
      <li><Link to="/MyProfile">My Profile</Link></li>
    </ul>
  </div> */
};

export default NavBar;
