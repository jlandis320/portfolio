import styles from "./ProjectPreview.module.css"

const ProjectPreview = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <section>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.depoLink}>Visit {project.title} </a>
        <a href={project.repoLink}>GITHUB</a>
      </section>
      <img className={styles.img} src={project.image} alt={project.title} />
    </div>
  );
};

export default ProjectPreview;
