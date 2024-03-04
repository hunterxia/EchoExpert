import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExpertCard({
  id,
  name,
  title,
  school,
  fields,
  focus_areas,
  image_src,
}) {
  const [showAllFields, setShowAllFields] = useState(false);
  const [showAllFocusAreas, setShowAllFocusAreas] = useState(false);

  const toggleFields = () => setShowAllFields(!showAllFields);
  const toggleFocusAreas = () => setShowAllFocusAreas(!showAllFocusAreas);
  return (
    <div className="max-w-sm bg-white p-6 rounded-lg shadow-xl m-5 hover:shadow-2xl hover:scale-102 transition-all duration-300">
      <div className="grid grid-cols-[1fr_5fr] gap-4">
        <div>
          <Image
            src={image_src}
            alt={`Profile image of ${name}`}
            width={90}
            height={90}
            style={{
              borderRadius: "50%",
              maxWidth: "90px",
              height: "auto",
            }}
          />
        </div>
        <div>
          <Link href={`/experts/${id}`}>
            <div className="text-xl text-gray-700 font-semibold">{name}</div>
          </Link>
          <p className="text-gray-600">
            <strong>Title:</strong> {title}
          </p>
          <p className="text-gray-600">
            <strong>School:</strong> {school}
          </p>
        </div>
      </div>

      <div className="flex mt-2 flex-wrap">
        <span>Fields:</span>
        {fields
          .slice(0, showAllFields ? fields.length : 3)
          .map((field, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold ml-2 mb-2 "
            >
              {field}
            </span>
          ))}
        {fields.length > 3 && (
          <button
            onClick={toggleFields}
            className="bg-black text-white rounded-full px-3 py-1 text-sm font-semibold ml-2 mb-2"
          >
            {showAllFields ? "View Less" : "View More"}
          </button>
        )}
      </div>

      <div className="flex mt-2 flex-wrap">
        <span>Focus areas:</span>
        {focus_areas
          .slice(0, showAllFocusAreas ? focus_areas.length : 3)
          .map((focus_area, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold ml-2 mb-2"
            >
              {focus_area}
            </span>
          ))}
        {focus_areas.length > 3 && (
          <button
            onClick={toggleFocusAreas}
            className="bg-black text-white rounded-full px-3 py-1 text-sm font-semibold ml-2 mb-2"
          >
            {showAllFocusAreas ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </div>
  );
}
