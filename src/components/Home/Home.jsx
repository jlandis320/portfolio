// css imports
import styles from "./Home.module.css";

// assets imports
import headshot from "./headshot.jpg";

const Home = ({ projects }) => {
  return (
    <>
      <div className={styles.hbody}>
          <h1>Hi, I'm <span className={styles.nameHighlight}> Jess Landis </span></h1>
          <img src={headshot} className={styles.pic} alt="jess"></img>
          <h2>I'm a software engineer</h2>
          <p style={{lineHeight: "2em"}}>I'm also a <span className={styles.dogHighlight}>dog lover,</span> <span className={styles.readHighlight}>avid reader,</span> and <span className={styles.triviaHighlight}>pop culture trivia geek.</span></p>
      </div>
    </>
  );
};

export default Home;
