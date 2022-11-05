// css imports
import styles from "./Home.module.css";

// assets imports

import headshot from "./headshot.jpeg";

// component imports
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <div className={styles.page}>
        <h1>Hi, I'm Jess</h1>
        <img src={headshot} className={styles.pic} alt="jess"></img>
        <h2>I'm a software engineer</h2>

      </div>
      <div className={styles.page}>
        <About />
      </div>
      <div className={styles.page}>
        <Projects />
      </div>
      <div className={styles.page}>
        <Contact />
      </div>
    </>
  );
};

export default Home;
