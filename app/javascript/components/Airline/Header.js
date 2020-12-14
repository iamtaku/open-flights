import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 48px 100px 48px 0;
  img {
    height: 56px;
    width: 56px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: -8px;
  }

  h1 {
    font-size: 56px;
  }
`;
const TotalReviews = styled.div`
  font-size: 16px;
  padding: 8px 0;
`;
const TotalOutOf = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`;

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.review.length;
  return (
    <Wrapper>
      <h1>
        {name} <img src={image_url} alt={name} />
      </h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className="starRating">{avg_score}</div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  );
};

export default Header;
