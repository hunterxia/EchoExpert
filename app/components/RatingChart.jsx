import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const StarRating = ({ value }) => {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-yellow-400">
          ★
        </span>
      ))}
      {halfStar === 1 && <span className="text-yellow-400">★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} className="text-gray-300">
          ☆
        </span>
      ))}
      <span className="ml-2 text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
};

const RatingChart = ({ contactAvg, technicalAvg, usefulAvg }) => {
  const average = (contactAvg + technicalAvg + usefulAvg) / 3;
  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <div className="text-xl text-gray-700">Overall</div>
        <StarRating value={average} />
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="text-xl text-gray-700">Contactibility</div>
        <StarRating value={contactAvg} />
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="text-xl text-gray-700">Technicality</div>
        <StarRating value={technicalAvg} />
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="text-xl text-gray-700">Usefulness of Info</div>
        <StarRating value={usefulAvg} />
      </div>
    </div>
  );
};

export default RatingChart;
