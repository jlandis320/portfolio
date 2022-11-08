import ProjectList from "../ProjectList/ProjectList";

import mac from "./Macintosh-working.svg";

import styles from "./Projects.module.css";

const Projects = ({projects}) => {
  return (
    <>
      <div>
        <img src={mac} alt="placeholder img" className={styles.mac} />
        <h1>My Work</h1>
        <ProjectList projects={projects} />
        {/* <ul>
          {projects.map((project, idx) => 
          <>
          <li key={idx}> { project.title }</li>
          <p key={idx}> { project.description }</p>
          <img key={idx} src={ project.image } alt="screenshot"/>
          <li key={idx}> { project.repoLink }</li>
          <li key={idx}> { project.depoLink }</li>
          </>
          )}
        </ul> */}
      </div>
    </>
  );
};

export default Projects;
