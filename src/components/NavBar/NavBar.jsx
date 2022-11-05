import { NavLink } from "react-router-dom";

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.bar}>
      <NavLink to='/' className={styles.navlink}>Home</NavLink>
      {/* <NavLink to="/about">About</NavLink> */}
      {/* <NavLink to="/contact">Contact</NavLink> */}
      {/* <NavLink to="/projects">Work</NavLink> */}
      <NavLink to="/resume" className={styles.navlink}>Resumé</NavLink>
    </nav>
  );
}

export default NavBar;