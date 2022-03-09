import React from "react";
import "./projects.css";

const GlobalProjects = () => {
  let ProjectCards = [
    {
      projectName: "Demo",
      creatorName: "emoVC==",
      tags: ["Web", "ML" ,'css'],
      projectDesc: "sbfdibygrfuFVbgfjgngknfv",
      projectID: "dscbhado -fchsdv -sfvsiudvj",
    },
  ];
  return (
    <div className="GlobalProjects">
      <h1>Explore All Projects</h1>
      {ProjectCards.map((proj) => (
        <div className="ProjectCard">
          <h3>{proj.projectName}</h3>
          <h5>{proj.creatorName}</h5>
          <p>{proj.projectDesc}</p>

          <div className="tags">
            {proj.tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>

          <div className="tags"></div>
        </div>
      ))}
    </div>
  );
};

export default GlobalProjects;
