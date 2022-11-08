const ProjectList = ({projects}) => {
  return (           
    <ul>
    {projects.map((project, idx) => 
    <>
    <li key={idx}> { project.title }</li>
    <p key={idx}> { project.description }</p>
    <img key={idx} src={ project.image } alt="screenshot"/>
    <li key={idx}> { project.repoLink }</li>
    <li key={idx}> { project.depoLink }</li>
    </>
    )}
  </ul>
)}

export default ProjectList;