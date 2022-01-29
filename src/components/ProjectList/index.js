import React from "react";

function ProjectList(props) {
  const { projects = [] } = props;
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3>
            <img
              src={require(`../../assets/${project.image}`)}
            
            ></img>
            <a href={project.deployed} target="_blank">
              {" "}
        
            </a>
            <a href={project.repo} target="_blank">
        
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
