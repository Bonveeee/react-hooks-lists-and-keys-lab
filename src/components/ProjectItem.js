import React from "react";

function ProjectItem({ name, about, technologies }) {
  const itemTechnologies = technologies.map(element=><span key={element}>{element}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {itemTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
