"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import { db, checkIfLoggedIn } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import experts from "../../data/experts_data.json";
import citations from "../../data/experts_citation.json";
import expertMediaAppearances from "../../data/experts_news.json";
import RatingForm from "../../components/RatingForm";
import RatingChart from "../../components/RatingChart";
import CommentSection from "../../components/CommentSection";
import Suggestion from "../../components/Suggestion"
import { Button } from "@/components/ui/button";

export default function Page({ params }) {
  const expert = experts.find((e) => e.id === params.id);
  const citation = citations[expert.name];
  const [citationsToShow, setCitationsToShow] = useState(citation.slice(0, 5));
  const [showAllCitations, setShowAllCitations] = useState(false);
  const router = useRouter();

  const allMediaAppearances = expertMediaAppearances[expert.name];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mediaAppearances, setMediaAppearances] = useState(
    allMediaAppearances.slice(0, 5)
  );
  const [averageRatings, setAverageRatings] = useState({
    averageRateContact: 0,
    averageUsefulness: 0,
    averageTechnicality: 0,
  });

  useEffect(() => {
    const loggedIn = checkIfLoggedIn();
    setIsLoggedIn(loggedIn);
  }, []);

  const handleViewMore = () => {
    setMediaAppearances(allMediaAppearances);
    setShowAll(true);
  };

  const handleViewMoreCitations = () => {
    setCitationsToShow(citation);
    setShowAllCitations(true);
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
  const hasCitation = citation && citation.length > 0;

    // Assuming currentExpert and expertsData are already defined
  const getSimilarExperts = (currentExpert, expertsData) => {
    const expertMatches = expertsData.map(expert => {
      if (expert.id === currentExpert.id) {
        return null;
      }
      const matchCount = expert.focus_areas.reduce((count, area) => {
        return currentExpert.focus_areas.includes(area) ? count + 1 : count;
      }, 0);
  
      return {
        ...expert,
        matchCount,
      };
    }).filter(Boolean); 
    expertMatches.sort((a, b) => b.matchCount - a.matchCount);
    return expertMatches.slice(0, 9);
  };
    

  // Now, get the similar experts to the current one
  console.log("current expert:", expert);
  const similarExperts = getSimilarExperts(expert, experts);
  console.log("similarExpers:", similarExperts);

  return (
    <div className="container mx-auto p-4">
      <Header />
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

          <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Citations</h2>
            {citation && citation.length > 0 ? (
              <ul className="list-disc pl-5">
                {citationsToShow.map((cit, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={cit.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {cit.title}
                    </a>
                    <a> {cit.citations}</a>
                    <p>Co-authors: {cit.co_authors}</p>
                  </li>
                ))}
                {!showAllCitations && citation.length > 5 && (
                  <Button onClick={handleViewMoreCitations}>View More</Button>
                )}
              </ul>
            ) : (
              <p>No citations available.</p>
            )}
          </div>

          <Button className="mt-4"onClick={handleContactClick}>Contact {expert.name}</Button>

          <Suggestion experts={similarExperts} />

          {/* Rating and Comments */}
          <div className="flex flex-row justify-between items-start mt-8">
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-2">Rating Distribution</h2>
            <RatingChart
              contactAvg={averageRatings.averageRateContact}
              technicalAvg={averageRatings.averageTechnicality}
              usefulAvg={averageRatings.averageUsefulness}
            />
          </div>
          <div className="w-2/3 flex flex-col items-center mt-20">
          <RatingForm expertId={expert.id} />
          </div>
          </div>
          <h3 className="text-2xl font-bold my-4">Comments</h3>
          {isLoggedIn ? (
            <CommentSection comments={commentsData} loading={loading} />
          ) : (
            <p>Please sign in to see the comments.</p>
          )}
          
        </div>
      )}
    </div>
  );
}
