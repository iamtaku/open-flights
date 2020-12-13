import React from "react";
import { Link } from "react-router-dom";

const AirlineGridItem = (props) => {
  return (
    <div className="card">
      <div className="airline-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="airline-name">{props.attributes.name}</div>
      <div className="airline-score">{props.attributes.avg_score}</div>
      <div className="airline-link">
        <Link to={`/airlines/${props.attribute.slug}`}>View Airline</Link>
      </div>
    </div>
  );
};

export default AirlineGridItem;
