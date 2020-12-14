import React from "react";
import styled from "styled-components";
import Grey from "./Stars/Grey";
import Hover from "./Stars/Hover";
import Selected from "./Stars/Selected";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 16px;
  padding: 40px 0 8px 0;
  border: 1px solid #efefef;
  background: #fff;
`;
const RatingBox = styled.div`
  margin-top: 12px;
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: 0.3s;
  }
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
`;

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 48px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 0 0 12px 0;
    padding: 12px;
    width: 96%;
    font-size: 16px;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;
const Wrapper = styled.div`
  background: #fff;
  padding: 24px;
  background: #000;
  padding-top: 100px;
`;
const SubmitBtn = styled.button`
  margin-top: 8px;
  width: 100%;
  color: #fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #fff;
  transition: ease-in-out 0.1s;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`;
const Headline = styled.div`
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;
const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const ReviewForm = ({
  handleSubmit,
  handleChange,
  attributes,
  review,
  setRating,
}) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          value={score}
          name="rating"
          id={`rating-${score}`}
          checked={review.score == score}
          onChange={() => console.log("checked")}
          // onclick={(e) =>}
        />
        <label onClick={setRating.bind(this, score)}></label>
      </>
    );
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Headline>Share a review for {attributes.name}!</Headline>
        <Field>
          <input
            type="text"
            name="title"
            placeholder="Review Title"
            onChange={handleChange}
            value={review.title || ""}
          />
        </Field>
        <Field>
          <input
            type="text"
            name="description"
            placeholder="Review Description"
            onChange={handleChange}
            value={review.description || ""}
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this airline!</RatingTitle>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit your Review</SubmitBtn>
      </form>
    </Wrapper>
  );
};

export default ReviewForm;
