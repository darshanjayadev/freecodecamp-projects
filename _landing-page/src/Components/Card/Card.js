import React from "react";
import "./Card.css"

const Card = (props) => (
  <section className="Card">
    <header className="card-header">
      <h3 className="project-title">{props.title}</h3>
    </header>
    <footer className="card-footer">
      <a className="card-link" href={props.link} target="blank">Go</a>
    </footer>
  </section>
);

export default Card;