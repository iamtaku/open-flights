import React, { useState, useEffect } from "react";
import axios from "axios";

import AirlineGridItem from "./AirlineGridItem";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/airlines.json")
      .then((response) => setAirlines(response.data.data))
      .catch((error) => console.log(error));
    //get all airlines from api
    // use the setairlines method to update our state
  }, [airlines.length]);
  console.log(airlines);
  const grid = airlines.map((item) => {
    return (
      <AirlineGridItem
        key={item.attributes.name}
        attributes={item.attributes}
      />
    );
  });

  return (
    <div className="home">
      <div className="header">
        <h1>Open Flights</h1>
        <div className="subHeader">Honest reviews for shitty airlines</div>
      </div>
      <div>
        <div className="grid">
          <ul>{grid}</ul>
        </div>
      </div>
    </div>
  );
};

export default Airlines;
