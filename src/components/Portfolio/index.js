import React from "react";
import ProjectList from "../ProjectList";

function Portfolio() {
  const projects = [
    {
      title: "Budget tracker",
      image: "Budget-Tracker-PWA.png",
      repository: "https://github.com/ALMA-DEV914/PWA-Budget-Tracker",
      deployment: "https://aqueous-cove-81545.herokuapp.com",
    },
    {
      title: "Menu Underground Hunt",
      image: "Menu-Hunt.png",
      repository: "https://github.com/ALMA-DEV914/Menu-Underground-Hunt",
      deployment: "https://still-lowlands-55484.herokuapp.com/"
    },
    {
      title: "Full-Stack Web Application",
      image: "Full-Stack.png",
      repository: "https://github.com/ALMA-DEV914/fixup-job-site-full-stack",
      deployment: "https://fixup-job.herokuapp.com/jobs",
    },
    {
      title: "Weather Dashboard",
      image: "Weather-Dashboard.png",
      repository: "https://github.com/ALMA-DEV914/Weather-Dashboard",
      deployment: "https://alma-dev914.github.io/Weather-Dashboard/",
    },
    {
      title: "Quiz Challenge",
      image: "Quiz-Challenge.png",
      repository: "https://github.com/ALMA-DEV914/Brainstorm-Challenge",
      deployment: "https://alma-dev914.github.io/Brainstorm-Challenge/",
    },
    {
      title: "Interactive Front End",
      image: "Interactive-Front-End.png",
      repository: "https://github.com/ALMA-DEV914/Front-End-Interactive-User-Interface-",
      deployment: "https://alma-dev914.github.io/Front-End-Interactive-User-Interface-/",
    },
    {
      title: "Create Sweat Moments",
      image: "Workout.png",
      repository: "https://github.com/ALMA-DEV914/Workout",
      deployment: "https://serene-escarpment-69823.herokuapp.com/",
    },
    {
      title: "MVC Tech Blog",
      image:"MVC-Tech-Blog.png",
      repository:"https://github.com/ALMA-DEV914/MVC-TECH-BLOG",
      deployment: "https://mysterious-brook-54092.herokuapp.com/"
    },
  
  ];
  return (
    
    <div>
      <h1 className="port">My Sample Websites</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Portfolio;
