import ProjectList from "../ProjectList/ProjectList";

import mac from "./Macintosh-working.svg";

import styles from "./Projects.module.css";

const Projects = ({projects}) => {
  return (
    <>
      <div>
        <img src={mac} alt="placeholder img" className={styles.mac} id="work"/>
        <h1>My Work</h1>
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default Projects;
