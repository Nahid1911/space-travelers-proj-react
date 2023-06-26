const NavBar = [
    {
      to: '/Rockets',
      text: 'Rockets',
    },
    {
      to: '/Missions',
      text: 'Missions',
    },
    {
        to: '/Dragons',
        text: 'Dragons',
      },
      {
        to: '/Myprofile',
        text: 'My Profile',
      },
  ];
  
  const Navigation = () => (
    <div className="navbar">
      <Navlink>
        <h1 className="logo"></h1>
        <ul>
          {navbars.map((navlink) => (
            <li key={navlink.to}>
              <NavLink to={navlink.to} className="">
                {navlink.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </Navlink>
    </div>
  );
  
  export default Navigation;
  