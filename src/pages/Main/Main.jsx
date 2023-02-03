// css imports
import styles from "./Main.module.css";

// assets imports
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import up from "./arrow-up-circle.svg"

// component imports
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home"


const Main = ({projects}) => {
  return (
    <>
      <div className={styles.page}>
        <Home />
      </div>
      <div className={styles.page}>
        <About />
      </div>
      <div className={styles.page}>
        <Projects projects={projects}/>
      </div>
      <div className={styles.page}>
        <Contact />
      </div>
      <div className={styles.icons}>
        <a href="#header">
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
