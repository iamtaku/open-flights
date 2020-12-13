import React, { useState, useEffect } from "react";
import axios from "axios";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/airlines.json");
    //get all airlines from api
    // use the setairlines method to update our state
  });
  return <div>This is the Airlines#index for our app</div>;
};

export default Airlines;
