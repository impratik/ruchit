import React from "react";
// import Card from '../../../UIElements/Card';
import "./ProjectItem.css";
import { Link } from "react-router-dom";
const ProjectItem = (props) => {
  return (
    <li className="list-item">
      <Link to={`/${props.name}`}>
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
