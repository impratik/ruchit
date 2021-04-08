import React from "react";
import "./ProjectList.css";
import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  if (props.items.length === 0) {
    return <h2>No Projects</h2>;
  }
  return (
    <ul className="project-list">
      {props.items.map((project) => {
        return (
          <ProjectItem
            key={project.id}
            id={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            type={project.type}
            role={project.role}
            logocredit={project.logocredit}
            detail={project.detail}
          />
        );
      })}
    </ul>
  );
};

export default ProjectList;
