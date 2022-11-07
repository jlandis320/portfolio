// css imports
import styles from "./Home.module.css";

// assets imports
import { BsLinkedin, BsGithub } from "react-icons/bs";
import headshot from "./headshot.jpg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";

// component imports
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.page}>
        <h1>Hi, I'm Jess Landis</h1>
        <img src={headshot} className={styles.pic} alt="jess"></img>
        <h2>I'm a software engineer</h2>
        <p>I'm also a dog lover, avid reader, and pop culture trivia geek.</p>
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
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/jess-landis/">
          <img src={linkedin} alt="linkedin icon" />
        </a>
        <a href="https://github.com/jlandis320">
          <img src={github} alt="github icon" />
        </a>
      </div>
    </>
  );
};

export default Home;
