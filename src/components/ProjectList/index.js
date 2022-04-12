//import the react 
import React from "react";
//function to render the project lists
function ProjectList(props) {
  const { projects = [] } = props;
  return (
    <main>
      <h1 id="pro">Projects|Portfolios</h1>
     <div className="projects">
      <ul className="flex-row">
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3><br></br>
            <div className="container">
           <div className="description">
              <div className="text">{project.description}</div>
            </div>
            <div className="pro-decs" id="icons">
            <img alt="projects" className="img-thumbnail mx-2"
              src={require(`../../assets/${project.image}`)}
            ></img>
            <button><a href={project.deployment} target="_blank" rel="noreferrer">
              {" "}<span className="btn">View the App</span>
            </a>
            </button>
            <button >
            <a href={project.repository} target="_blank" rel="noreferrer">
              {" "}<span className="btn">Source code</span>
            </a></button>
            </div>
            </div>
          </li>
        
        ))}
      </ul>
    </div>
    </main>
  );
}
//export the default project lists
export default ProjectList;
