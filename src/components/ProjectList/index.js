import React from "react";

function ProjectList(props) {
  const { projects = [] } = props;
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3>
          
            <img alt="projects" 
              src={require(`../../assets/${project.image}`)}
            
            ></img>
            <a href={project.deployment} target="_blank" rel="noreferrer">
              {" "}
        
            </a>
            <a href={project.repository} target="_blank" rel="noreferrer">
        
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
