import styles from "./ProjectPreview.module.css"
import github from "./github.svg"

const ProjectPreview = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <section>
        <a href={project.depoLink}>
        <h3>{project.title}</h3>
        </a>
        <p>{project.description}</p>
        <a href={project.repoLink}><img src={github} alt="github"/></a>
      </section>
      <a href={project.depoLink}>
      <img className={styles.img} src={project.image} alt={project.title} />
      </a>
    </div>
  );
};

export default ProjectPreview;
