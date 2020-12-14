import React from "react";

const ReviewForm = (props) => {
  return (
    <div className="wrapper">
      <form action="">
        <div>Share a review!</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
          <input
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this airline!</div>
          </div>
        </div>
        <button type="submit">Submit your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
