import React from "react";
import "./reviews.scss";
import { ReviewCard } from "./ReviewCard";

export const Reviews = ({ reviews }) => {
  return (
    <div id="reviews">
      <h2 className="text-gradient">Our customers love us</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
    </div>
  );
};
