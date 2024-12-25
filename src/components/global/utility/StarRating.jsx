import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// StarRating Component
const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 >= 0.5; // Check for half-star
  const totalStars = 5; // We are showing 5 stars total

  let stars = [];
  // Add filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(<FaStar key={`filled-${i}`} className="text-yellow-500" />);
  }
  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }
  // Add empty stars
  for (let i = stars.length; i < totalStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
  }

  return (
    <span className="flex items-center space-x-1">
      {stars} {/* Render all icons inline */}
    </span>
  );
};

export default StarRating;
