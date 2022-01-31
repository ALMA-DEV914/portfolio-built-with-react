import React from "react";
import computerImage from '../../assets/cover/computer.jpg';
import githubImage from '../../assets/cover/github.jpeg';

function ProjectList(props) {
  const { projects = [] } = props;
  return (
    <main>
    
    <div className="projects">
      <ul className="flex-row">
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3><br></br>
            <img alt="projects" className="img-thumbnail mx-2"
              src={require(`../../assets/${project.image}`)}
            ></img>
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

export default ProjectList;
