import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const RatingChart = ({ contactAvg, technicalAvg, usefulAvg }) => {
  // Define chart options
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Ensures the scale starts at zero
        max: 5, // Assuming the rating is out of 5
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines
        },
      },
    },
  };

  // Define the chart data
  const chartData = {
    labels: ["Contactibility", "Technicality", "Usefulness of Info"],
    datasets: [
      {
        label: "", // Removed the label
        data: [contactAvg, technicalAvg, usefulAvg],
        backgroundColor: "rgba(0, 85, 253, 1)", // Set to black with some transparency
      },
    ],
  };

  return <Bar data={chartData} options={options} />;
};

export default RatingChart;
