import { NavLink } from "react-router-dom";
// import resume from 'Jess-Landis-Resume.pdf'

import styles from './NavBar.module.css'

const NavBar = () => {

  const downloadRes = () => {
    fetch('Jess-Landis-Resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'JessLandisResume.pdf'
        alink.click()
      })
    })
  }

  return (
    <nav className={styles.bar} id="nav">
      <NavLink to='/' className={styles.navlink}>Home</NavLink>
      <a href="#about" className={styles.navlink}>About</a>
      <a href="#work" className={styles.navlink}>Work</a>
      <a href="#contact" className={styles.navlink}>Contact</a>
      <button onClick={downloadRes} className={styles.navlink} title="Download Resumé">Resumé</button>
    </nav>
  );
}

export default NavBar;