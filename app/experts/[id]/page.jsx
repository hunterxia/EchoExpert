"use client";
import experts from "../../data/experts_data.json";
import expertMediaAppearances from "../../data/experts_news.json";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RatingForm from "../../components/RatingForm";
import RatingChart from "../../components/RatingChart";

export default function Page({ params }) {
  const expert = experts.find((expert) => expert.id === params.id);
  const allMediaAppearances = expertMediaAppearances[expert.name];
  const [mediaAppearances, setMediaAppearances] = useState(
    allMediaAppearances.slice(0, 5)
  );
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setMediaAppearances(allMediaAppearances);
    setShowAll(true);
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${expert.email}`;
  };

  const hasMediaAppearances = mediaAppearances.length > 0;

  const submitRating = (ratingData) => {
    // Handle the submission of rating data
    console.log(ratingData); // Replace with actual submission logic
  };
  const chartData = {
    labels: ["Awesome 5", "Great 4", "Good 3", "OK 2", "Awful 1"],
    datasets: [
      {
        label: "Ratings",
        data: [46, 4, 2, 1, 1], // Replace these numbers with your actual data
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {Object.keys(expert).length > 0 ? (
        <div className="mx-auto">
          {/* Expert Details */}
          <div className="overflow-hidden">
            <img
              src={expert.image_src}
              alt={expert.name}
              className="w-32 h-auto"
            />
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
            <h1 className="text-2xl font-bold mb-2">{expert.name}</h1>
            <p className="mb-2">
              <strong>Email:</strong> {expert.email}
            </p>
            <p className="mb-2">
              <strong>School:</strong> {expert.school}
            </p>
            <p className="mb-2">
              <strong>Title:</strong> {expert.title}
            </p>
            <p className="mb-2">
              <strong>Focus Areas:</strong> {expert.focus_areas.join(", ")}
            </p>
          </div>

          <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Media Appearances</h2>
            {hasMediaAppearances ? (
              <ul className="list-disc pl-5">
                {mediaAppearances.map((appearance, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={appearance.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {appearance.title} - {appearance.date}
                    </a>
                  </li>
                ))}
                {!showAll && allMediaAppearances.length > 5 && (
                  <Button onClick={handleViewMore}>View More</Button>
                )}
              </ul>
            ) : (
              <p>No media appearances available.</p>
            )}
          </div>

          {/* Contact Button */}
          <Button onClick={handleContactClick}>Contact {expert.name}</Button>
          <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Rating Distribution</h2>
            {/* Implement the rating distribution UI here */}
            <RatingChart contactAvg={4.5} technicalAvg={3.8} usefulAvg={4.2} />
          </div>

          {/* Rating Form Popup Trigger */}
          <RatingForm submitRating={submitRating} />
        </div>
      ) : null}
    </div>
  );
}
