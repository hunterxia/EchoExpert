"use client";
import experts from "../../data/experts_data.json";
import { Button } from "@/components/ui/button";

export default function Page({ params }) {
  const expert = experts.find((expert) => expert.id === params.id);

  expert.publications = [
    { title: "The Future of Renewable Energy", date: "2022-01-15", url: "#" },
    { title: "Impact of Climate Change", date: "2022-05-10", url: "#" },
  ];
  expert.mediaAppearances = [
    {
      title: "Interview on Environmental Trends",
      date: "2023-02-20",
      url: "#",
    },
    { title: "Podcast on Sustainable Living", date: "2023-04-05", url: "#" },
  ];

  const handleContactClick = () => {
    window.location.href = `mailto:${expert.email}`;
  };

  return (
    <div className="container mx-auto p-4">
      {Object.keys(expert).length > 0 ? (
        <div className="mx-auto">
          {/* Expert Details */}
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
          </div>

          {/* Recent Publications */}
          <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Recent Publications</h2>
            <ul className="list-disc pl-5">
              {expert.publications.map((publication, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {publication.title} - {publication.date}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Appearances */}
          <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Media Appearances</h2>
            <ul className="list-disc pl-5">
              {expert.mediaAppearances.map((appearance, index) => (
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
            </ul>
          </div>

          <Button onClick={handleContactClick}>Contact {expert.name}</Button>
        </div>
      ) : (
        <p className="text-center text-xl">Expert not found.</p>
      )}
    </div>
  );
}
