// import { NavLink } from "react-router-dom";
// import resume from 'Jess-Landis-Resume.pdf'

import styles from './NavBar.module.css'
import PositionedMenu from '../PositionedMenu/PositionedMenu';

const NavBar = () => {

  return (
    <nav className={styles.bar} id="nav">
      {/* <NavLink to='/' className={styles.navlink} id="homebutton">Home</NavLink> */}
      <a href="#about" className={styles.navlink} id="aboutbutton">About</a>
      <a href="#work" className={styles.navlink} id="workbutton">Work</a>
      <a href="#contact" className={styles.navlink} id="contactbutton">Contact</a>
      <a href="https://jesslandis.netlify.app/Jess-Landis-Resume.pdf" className={styles.navlink} target="_blank" rel="noreferrer" id="resumebutton">Resumé</a>
      <div className={styles.hamburger}>
        <PositionedMenu />
      </div>
    </nav>
  );
}

export default NavBar;