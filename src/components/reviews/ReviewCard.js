import React from "react";
import "./reviewcard.scss";

export const ReviewCard = ({ review }) => {
  return (
    <div id="review-card">
      <p>{review.desc}</p>
      <div>
        <img src={review.image} />
        <div className="name-position">
          <p className="name">{review.name}</p>
          <p className="position">{review.position}</p>
        </div>
      </div>
    </div>
  );
};
