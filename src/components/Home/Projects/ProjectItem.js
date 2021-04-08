import React from "react";
// import Card from '../../../UIElements/Card';
import "./ProjectItem.css";
import { Link } from "react-router-dom";

import ProjectDetails from "../../ProjectDetails/ProjectDetails";
const ProjectItem = (props) => {
  const project = {
    id: `${props.id}`,
    name: `${props.name}`,
    image: `${props.image}`,
    description: `${props.description}`,
    type: `${props.type}`,
    detail: `${props.detail}`,
    role: `${props.role}`,
    logocredit: `${props.logocredit}`    
  };

  return (
    <li className="list-item">
      <Link
        to={{
          pathname: `/project/${props.id}`,
          state: {
            project,
          },
        }}
      >
        <div className="container">
          <img src={props.image} alt={props.name} className="item-image" />
          <div className="item-desc">
            <h1>{props.name}</h1>
            <h4> {props.description} </h4>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
