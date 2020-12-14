import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 48px;
`;

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
        console.log(response.data);
        setAirline(response.data);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Wrapper>
        <Column>
          <Main>
            {loaded && (
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
            )}
            <div className="reviews"></div>
          </Main>
        </Column>
        <Column>
          <div className="review-form"></div>
        </Column>
      </Wrapper>
    </div>
  );
};

export default Airline;
