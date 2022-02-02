//import the react 
import React from "react";
//import the source of images
import computerImage from '../../assets/cover/computer.jpg';
import githubImage from '../../assets/cover/github.jpeg';
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
            <img alt="projects" className="img-thumbnail mx-2"
              src={require(`../../assets/${project.image}`)}
            ></img>
            <div className="overlay">
              <div className="text">{project.description}</div>
            </div>
            </div>
            <div className="flex-row" id="icons">
            <p className="btn"><a href={project.deployment} target="_blank" rel="noreferrer">
              {" "}<span>View the App</span>
              <img src={computerImage} className='my-2' style={{width: '40px'}} alt='cover'/> 
            </a>
            </p>
            <p className="btn">
            <a href={project.repository} target="_blank" rel="noreferrer">
              {" "}<span>Source code</span>
              <img src={githubImage} className='my-2' style={{width: '40px'}} alt='cover'/>
            </a></p>
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
