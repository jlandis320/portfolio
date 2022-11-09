import union from "./Union.svg"

import styles from "./About.module.css"
const About = () => {
  return ( 
    <div id="about">
      <img src={union} alt="placeholder img" className={styles.union} id="about"/>
      <h1>About Me</h1>
      <p>brand statement</p>
    </div>
  );
}

export default About
