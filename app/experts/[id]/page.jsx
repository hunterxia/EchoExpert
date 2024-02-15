"use client";
import experts from "../../data/experts_data.json";
import { Button } from "@/components/ui/button";

export default function Page({ params }) {
  const expert = experts.find((expert) => expert.id === params.id);

  const handleContactClick = () => {
    window.location.href = `mailto:${expert.email}`;
  };

  return (
    <div className="container mx-auto p-4">
      {expert ? (
        <div className="mx-auto">
          <div className="overflow-hidden">
            <img src={expert.image_src} alt={expert.name} className="h-auto" />
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

            <Button onClick={handleContactClick}>Contact {expert.name}</Button>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl">Expert not found.</p>
      )}
    </div>
  );
}
