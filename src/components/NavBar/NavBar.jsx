import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      {/* <NavLink to="/about">About</NavLink> */}
      {/* <NavLink to="/contact">Contact</NavLink> */}
      {/* <NavLink to="/projects">Work</NavLink> */}
      <NavLink to="/resume">Resumé</NavLink>
    </nav>
  );
}

export default NavBar;