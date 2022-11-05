// css imports
import styles from "./Home.module.css";

// assets imports
import mac from "./Macintosh-working.svg";

// component imports
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <div className={styles.page}>
        <h1>Hi, I'm Jess</h1>
        <h2>I'm a software engineer</h2>
        <img src={mac} alt="placeholder img" />
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
