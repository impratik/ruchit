import React from "react";
import { useLocation } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="main-container">

      <div className="left1">
      <h1> {location.state.project.name} </h1>
      <h4> {location.state.project.description} </h4>
      </div>
      
      <div className="righ1">
        <h3> {location.state.project.detail} </h3>
        <button> Go to Store </button>
      </div>

      <div className="left2">
      <img
        src={location.state.project.image}
        alt={location.state.project.name}
        className="detail-image"
      />
      </div>
      <div className="right2">
        <h2> Type : {location.state.project.type} </h2>
        <h2> Role: {location.state.project.role}</h2>
        <h2> Logo Credit: {location.state.project.role} </h2>
      </div>
       
      <div className="project-detail">
      
      </div >
      
    
    </div>
  );
};

export default ProjectDetails;
