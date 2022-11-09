import { NavLink } from "react-router-dom";

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.bar} id="nav">
      <NavLink to='/' className={styles.navlink}>Home</NavLink>
      <a href="#about" className={styles.navlink}>About</a>
      <a href="#work" className={styles.navlink}>Work</a>
      <a href="#contact" className={styles.navlink}>Contact</a>
      <NavLink to="/resume" className={styles.navlink}>Resumé</NavLink>
    </nav>
  );
}

export default NavBar;