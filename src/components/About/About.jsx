import union from "./Union.svg"

import styles from "./About.module.css"
const About = () => {
  return ( 
    <>
    <div style={{height: "100%", marginTop: "1em"}}>
      <img src={union} alt="placeholder img" className={styles.union}/>
      <h1>About Me</h1>
      <p>brand statement</p>
    </div>
    </>
  );
}

export default About
