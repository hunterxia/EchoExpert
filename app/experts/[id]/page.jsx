"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import experts from "../../data/experts_data.json";
import expertMediaAppearances from "../../data/experts_news.json";
import RatingForm from "../../components/RatingForm";
import RatingChart from "../../components/RatingChart";
import CommentSection from "../../components/CommentSection";
import { Button } from "@/components/ui/button";

export default function Page({ params }) {
  const expert = experts.find((e) => e.id === params.id);
  const allMediaAppearances = expertMediaAppearances[expert.name];
  const [mediaAppearances, setMediaAppearances] = useState(
    allMediaAppearances.slice(0, 5)
  );
  const [showAll, setShowAll] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [averageRatings, setAverageRatings] = useState({
    averageRateContact: 0,
    averageUsefulness: 0,
    averageTechnicality: 0,
  });

  const handleViewMore = () => {
    setMediaAppearances(allMediaAppearances);
    setShowAll(true);
  };

  const fetchComments = async (expertId) => {
    try {
      const commentsQuery = query(
        collection(db, "experts"),
        where("id", "==", expertId)
      );

      const querySnapshot = await getDocs(commentsQuery);
      if (!querySnapshot.empty) {
        const { ratings } = querySnapshot.docs[0].data();
        const userIds = [...new Set(ratings.map((rating) => rating.userId))];
        const userSnapshots = await Promise.all(
          userIds.map((userId) => getDoc(doc(db, "users", userId)))
        );
        const users = Object.fromEntries(
          userSnapshots.map((snap) => [snap.id, snap.data()])
        );

        return ratings
          .map((rating) => ({
            ...rating,
            username: users[rating.userId]?.displayName,
            avatar: users[rating.userId]?.photoURL,
            date: rating.timestamp.toDate().toLocaleDateString(),
          }))
          .filter((rating) => users[rating.userId]);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
    return [];
  };

  useEffect(() => {
    const expertId = params.id;
    setLoading(true);

    const fetchAverageRatings = async () => {
      const expertRef = doc(db, "experts", expertId);
      const expertSnap = await getDoc(expertRef);

      if (expertSnap.exists()) {
        const expertData = expertSnap.data();
        setAverageRatings({
          averageRateContact: expertData.averageRateContact || 0,
          averageUsefulness: expertData.averageUsefulness || 0,
          averageTechnicality: expertData.averageTechnicality || 0,
        });
      }
    };

    fetchComments(expertId)
      .then((commentsWithDetails) => {
        setCommentsData(commentsWithDetails);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });

    fetchAverageRatings().catch((error) => {
      console.error("Error fetching average ratings:", error);
    });

    setLoading(false);
  }, [params.id]);

  const handleContactClick = () => {
    window.location.href = `mailto:${expert.email}`;
  };

  const hasMediaAppearances = mediaAppearances.length > 0;

  return (
    <div className="container mx-auto p-4">
      {Object.keys(expert).length > 0 && (
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
            {/* Expert Info */}
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

          {/* Media Appearances */}
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

          <Button onClick={handleContactClick}>Contact {expert.name}</Button>

          {/* Rating and Comments */}
          <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Rating Distribution</h2>
            <RatingChart
              contactAvg={averageRatings.averageRateContact}
              technicalAvg={averageRatings.averageTechnicality}
              usefulAvg={averageRatings.averageUsefulness}
            />
          </div>
          <RatingForm expertId={expert.id} />
          <CommentSection comments={commentsData} loading={loading} />
        </div>
      )}
    </div>
  );
}
