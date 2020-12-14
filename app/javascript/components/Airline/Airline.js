import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const Airline = ({ match }) => {
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { slug } = match.params;
  const url = `/api/v1/airlines/${slug}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setAirline(response.data);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="column">
          {loaded && <Header attributes={airline.data.attributes} />}
          <div className="reviews"></div>
        </div>
        <div className="column">
          <div className="review-form"></div>
        </div>
      </div>
    </div>
  );
};

export default Airline;
