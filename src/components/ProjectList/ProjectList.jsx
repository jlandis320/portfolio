import ProjectPreview from "../ProjectPreview/ProjectPreview";

import styles from "./ProjectList.module.css"

const ProjectList = ({ projects }) => {
  return (
    <div className={styles.projects}>
      {projects.map((project, idx) => (
        <>
            <ProjectPreview project={project} key={idx} />
        </>
      ))}
    </div>
  );
};

export default ProjectList;
