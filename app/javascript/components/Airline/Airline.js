import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./header";
import ReviewForm from "./reviewForm";

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
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { slug } = match.params;
  const url = `/api/v1/airlines/${slug}`;

  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
    // console.log(review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    // console.log(csrfToken);
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
    const airline_id = airline.data.id;
    axios
      .post(`/api/v1/reviews`, { review, airline_id })
      .then((response) => {
        console.log(response);
        const included = [...airline.included, response.data.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((error) => console.log(error));
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

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
        {loaded && (
          <>
            <Column>
              <Main>
                <Header
                  attributes={airline.data.attributes}
                  review={airline.included}
                />
                <div className="review"></div>
              </Main>
            </Column>
            <Column>
              <ReviewForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setRating={setRating}
                attributes={airline.data.attributes}
                review={review}
              />
            </Column>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Airline;
