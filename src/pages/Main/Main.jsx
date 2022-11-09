// css imports
import styles from "./Main.module.css";

// assets imports
import { BsLinkedin, BsGithub } from "react-icons/bs";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import up from "./arrow-up-circle.svg"

// component imports
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home"
import { Link } from "react-router-dom";

const Main = ({projects}) => {
  return (
    <>
      <div className={styles.page}>
        <Home />
      </div>
      <div className={styles.page} style={{backgroundColor: 'lightblue'}}>
        <About />
      </div>
      <div className={styles.page} style={{backgroundColor: 'lightskyblue'}}>
        <Projects projects={projects}/>
      </div>
      <div className={styles.page} style={{backgroundColor: 'cornflowerblue'}}>
        <Contact />
      </div>
      <div className={styles.icons}>
        <a href="#nav">
          <img src={up} alt="top" />
        </a>
        <a href="https://www.linkedin.com/in/jess-landis/">
          <img src={linkedin} alt="linkedin icon"/>
        </a>
        <a href="https://github.com/jlandis320">
          <img src={github} alt="github icon" />
        </a>
      </div>
    </>
  );
};

export default Main;
