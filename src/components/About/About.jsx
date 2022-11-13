import union from "./Union.svg"

import styles from "./About.module.css"
const About = () => {
  return ( 
    <div id="about" style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
      <img src={union} alt="placeholder img" className={styles.union} />
      <h1>About Me</h1>
      <p className={styles.aboutp}>I'm a software engineer with an eye for design who loves finding the balance between flash and function. I take pride in creating well-crafted, user-oriented code. I bring creative problem solving and clear communication to every project.</p>
    </div>
  );
}

export default About
