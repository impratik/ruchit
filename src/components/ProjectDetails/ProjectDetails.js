import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../../src/UIElements/Card";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="main-container">
      <div className="left1">
        <h1> {location.state.project.name} </h1>
        <h4> {location.state.project.description} </h4>
      </div>

      <div className="right1">
      
      </div>

      <div className="left2">
        <img
          src={location.state.project.image}
          alt={location.state.project.name}
          className="detail-image"
        />
      </div>
      <div className="right2">
      <h4> {location.state.project.detail} </h4>
      <a href={location.state.project.link}>
          <button className="btn"> Visit Store </button>
        </a>
        <div>
            <table className="styled-table">
              <tr>
                <td> Type</td>
                <td>{location.state.project.type} </td>
              </tr>
              <tr>
                <td  className="left"> Role</td>
                <td>{location.state.project.role}</td>
              </tr>

              <tr>
                <td  className="left"> Logo Credit</td>
                <td>{location.state.project.logocredit}</td>
              </tr>
            </table>
        </div>

        {/* <Card className="">
          <h2> Type : {location.state.project.type} </h2>
          <h2> Role: {location.state.project.role}</h2>
          <h2> Logo Credit: {location.state.project.logocredit} </h2>
        </Card> */}
      </div>
    </div>
  );
};

export default ProjectDetails;
