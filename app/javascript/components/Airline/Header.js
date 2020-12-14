import React from "react";

const Header = (props) => {
  return (
    <div className="wrapper">
      <h1>Airline name</h1>
      <div>
        <div className="totalReviews"></div>
        <div className="starRating"></div>
        <div className="totalOutOf5"></div>
      </div>
    </div>
  );
};

export default Header;
