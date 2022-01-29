import React from "react";
import ProjectList from "../ProjectList";

function Portfolio() {
  const projects = [
    {
      title: "Budget tracker",
      image: "Budget-Tracker-PWA.png",
      repository: "",
      deployment: "",
    },
    {
      title: "Weather Dashboard",
      image: "weather-Dashboard.png",
      repository: "",
      deployment: "",
    },
    {
      title: "Quiz Challenge",
      image: "Quiz-Challenge.png",
      repository: "",
      deployment: "",
    },
    {
      title: "Interactive Front End",
      image: "Interactive-Front-End.png",
      repository: "",
      deployment: "",
    },
    {
      title: "Create Sweat Moments",
      image: "Workout.png",
      repository: "",
      deployment: "",
    },
    {
      title: "Full-Stack Web Application",
      image: "Full-Stack.png",
      repository: "",
      deployment: "",
    },
    {
      title: "MVC Tech Blog",
      image:"MVC-Tech-Blog",
      repository:"",
      deployment: ""
    },
    {
      title: "Menu Underground Hunt",
      image: "Menu-Hunt",
      repository: "",
      deployment: ""
    },
  ];
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Portfolio;
