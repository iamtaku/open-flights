import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import AirlineGridItem from "./airlineGridItem";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;

const SubHeader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

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
  // console.log(airlines);
  const grid = airlines.map((item) => {
    return (
      <AirlineGridItem
        key={item.attributes.name}
        attributes={item.attributes}
      />
    );
  });

  return (
    <Home>
      <Header>
        <h1>Open Flights</h1>
        <SubHeader>Honest reviews for shitty airlines</SubHeader>
      </Header>
      <Grid>{grid}</Grid>
    </Home>
  );
};

export default Airlines;
