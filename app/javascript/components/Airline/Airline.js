import React, { useEffect, useState } from "react";
import axios from "axios";

const Airline = ({ match }) => {
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState({});
  const { slug } = match.params;
  const url = `/api/v1/airlines/${slug}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setAirline(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <div>This is the Airlines#show for our app for {slug}</div>;
};

export default Airline;
