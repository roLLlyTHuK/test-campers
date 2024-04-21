import React from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(
      <FaStar fill="var(--color-yellow)" key={i} width={16} height={16} />
    );
  }
  return <div style={{ display: "flex", gap: "4px" }}>{stars}</div>;
};

export default RatingStars;
