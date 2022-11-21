import union from "./Union.svg";
import node from "./node.svg"
import bootstrap from "./bootstrap.svg"
import css from "./css.svg"
import django from "./django.svg"
import docker from "./docker.svg"
import express from "./express.svg"
import html from "./html.svg"
import javascript from "./javascript.svg"
import mongo from "./mongodb.svg"
import mui from "./mui.svg"
import psql from "./psql.svg"
import python from "./python.svg"
import react from "./react.svg"
import tailwind from "./tailwind.svg"
import npm from "./npm.svg"


import styles from "./About.module.css";
const About = () => {
  return (
    <div
      id="about"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={union} alt="placeholder img" className={styles.union} />
      <h1>About Me</h1>
      <div className={styles.aboutStackContainer}>
        <div className={styles.stackContainer}>
          <img src={javascript} alt="javascript" title="Javascript" />
          <img src={mongo} alt="mongoDB" title="MongoDB" />
          <img src={express} alt="express" title="Express" />
          <img src={react} alt="react" title="React" />
          <img src={node} alt="node.js" title="Node.js" />
          <img src={python} alt="python" title="Python" />
          <img src={psql} alt="PostgreSQL" title="PostgreSQL"/>
          <img src={mui} alt="material UI" title="Material UI" />
          <img src={bootstrap} alt="bootstrap" title="Bootstrap"/>
          <img src={tailwind} alt="tailwind css" title="Tailwind CSS" />
          <img src={npm} alt="npm" title="NPM" />
          <img src={docker} alt="docker" title="Docker" />
          <img src={html} alt="html" title="HTML"/>
          <img src={css} alt="CSS" title="CSS"/>
          <img src={django} alt="django" title="Django" />
        </div>
        <p className={styles.aboutp}>
          I'm a software engineer with an eye for design who loves finding the
          balance between flash and function. I take pride in creating
          well-crafted, user-oriented code. I bring creative problem solving and
          clear communication to every project.
        </p>
      </div>
    </div>
  );
};

export default About;
