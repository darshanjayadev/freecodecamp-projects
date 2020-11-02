import React from "react";
import "./CardGenerator.css";
import Card from "../Card/Card";

const data = require("../../assets/projects.json");

const CardGenerator = () => (
  <div className="CardGenerator">
    {
      data.projects.map((project) => (
        <Card title={project.title} link={project.link} key={project.title}/>
      ))
    }
  </div>
);

export default CardGenerator;
