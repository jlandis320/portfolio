import union from "./Union.svg"

import styles from "./About.module.css"
const About = () => {
  return ( 
    <>
      <img style={{alignSelf: "flex-start"}}src={union} alt="placeholder img" className={styles.union}/>
      <h1>About Me</h1>
      <p>brand statement</p>
    </>
  );
}

export default About
