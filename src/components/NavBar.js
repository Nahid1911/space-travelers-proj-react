import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Logo from './assets/planet_bigger.png';
import NavStyles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();

  const getNavLinkStyle = (pathname, style) => {
    if (location.pathname === pathname) {
      return `${style} ${NavStyles.active}`;
    }
    return style;
  };

  const rocketLinkStyle = getNavLinkStyle('/', `${NavStyles.linksStyles} ${NavStyles.mr1}`);
  const missionsLinkStyle = getNavLinkStyle('/mission', `${NavStyles.linksStyles} ${NavStyles.mr1}`);
  const dragonLinkStyle = getNavLinkStyle('/dragon', `${NavStyles.linksStyles} ${NavStyles.borderRight}`);
  const myProfileLinkStyle = getNavLinkStyle('/myprofile', `${NavStyles.linksStyles} ${NavStyles.ml1}`);

  return (
    <Stack className={NavStyles.navbarContainer}>
      <div className={NavStyles.logoContainer}>
        <NavLink to="/">
          <img src={Logo} alt="" className={`${NavStyles.logo} ${NavStyles.mr1}`} />
        </NavLink>
        <h1>Space Travelers&apos; HUB</h1>
      </div>
      <Nav activeKey="/" className={NavStyles.linksContainer}>
        <Nav.Item><Nav.Link as={NavLink} to="/" exact="true" className={rocketLinkStyle}>Rockets </Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={NavLink} to="/mission" className={missionsLinkStyle}>Missions</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={NavLink} to="/dragon" className={dragonLinkStyle}>Dragon</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={NavLink} to="/myprofile" className={myProfileLinkStyle}>My Profile</Nav.Link></Nav.Item>
      </Nav>
    </Stack>
  );
};

export default NavBar;
