// css imports
import styles from "./Home.module.css";

// assets imports
import { BsLinkedin, BsGithub } from "react-icons/bs";
import headshot from "./headshot.jpg";

const Home = ({ projects }) => {
  return (
    <>
      <div className={styles.hbody}>
          <h1>Hi, I'm Jess Landis</h1>
          <img src={headshot} className={styles.pic} alt="jess"></img>
          <h2>I'm a software engineer</h2>
          <p>I'm also a dog lover, avid reader, and pop culture trivia geek.</p>
      </div>
    </>
  );
};

export default Home;
