import React from "react";

const Airline = ({ match }) => {
  // console.log(match);
  const { slug } = match.params;
  console.log(slug);
  return <div>This is the Airlines#show for our app for {slug}</div>;
};

export default Airline;
