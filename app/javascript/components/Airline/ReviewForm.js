import React from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 16px;
  padding: 40px 0 8px 0;
  border: 1px solid #efefef;
  background: #fff;
`;
const RatingBox = styled.div``;
const RatingTitles = styled.div``;

const ReviewForm = ({ handleSubmit, handleChange, attributes, review }) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          value={score}
          name="rating"
          id={`rating-${score}`}
          // onChange={() => console.log()}
        />
        <label></label>
      </>
    );
  });

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div>Share a review for {attributes.name}!</div>
        <div className="field">
          <input
            type="text"
            name="title"
            placeholder="Review Title"
            onChange={handleChange}
            value={review.title || ""}
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="description"
            placeholder="Review Description"
            onChange={handleChange}
            value={review.description || ""}
          />
        </div>
        <div className="field">
          <RatingContainer>
            <div className="rating-title-text">Rate this airline!</div>
            {ratingOptions}
          </RatingContainer>
        </div>
        <button type="submit">Submit your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
