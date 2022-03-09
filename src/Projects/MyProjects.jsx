import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const MyProjects = () => {
  let ProjectCards = [
    {
      projectName: "Demo",
      creatorName: "emoVC==",
      tags: ["Web", "ML", "css"],
      projectDesc: "sbfdibygrfuFVbgfjgngknfv",
      projectID: "dscbhado -fchsdv -sfvsiudvj",
    },
  ];

  let [projects, setProjects] = useState([]);

  const getEmail = () => localStorage.getItem("email");

  const getProjects = async () => {
    const { data } = await axios.get(
      `https://brogrammers-backend.herokuapp.com/project/id/?email=${getEmail()}`
    );

    console.log(data[0]);

    if (true) setProjects(data[0].projects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="GlobalProjects">
      <h1>My Projects</h1>
      {projects.map((projectCard) => (
        <div className="ProjectCard">
          <h3>{projectCard?.projectName}</h3>
          <h4>{projectCard?.projectDescription}</h4>
          <h5>{projectCard?.projectLink}</h5>
          <Link to={projectCard?.uuid}>View Files</Link>
          <h3>
            <div className="tags">
              {projectCard?.tags?.map((eachItem) => (
                <p>{eachItem}</p>
              ))}
            </div>
          </h3>

          <div className="tags"></div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
