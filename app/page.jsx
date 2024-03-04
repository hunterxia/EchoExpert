"use client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExpertCard from "./components/ExpertCard";
import useEventStore from "./store/eventStore";
import expertsData from "./data/experts_data.json";
import citations from "./data/experts_citation.json";
import expertMediaAppearances from "./data/experts_news.json";
import { useState } from "react";
import computeExpertDataCounts from "./store/expertDataUtils";

export default function Home() {
  const searchQuery = useEventStore((state) => state.searchQuery);
  const setSearchQuery = useEventStore((state) => state.setSearchQuery);
  const [sortCriteria, setSortCriteria] = useState("name");
  const citation = citation[expert.name]?.length || 0;

  const expertsWithCounts = computeExpertDataCounts(
    expertsData,
    citations,
    expertMediaAppearances
  );
  console.log(expertsWithCounts.citations);
  const filteredExperts = expertsWithCounts.filter((expert) => {
    return (
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.fields.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      expert.focus_areas.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  const sortExperts = (experts, criteria) => {
    return experts.slice().sort((a, b) => {
      if (criteria === "citationCount") {
        return b.citationCount - a.citationCount;
      } else if (criteria === "mediaAppearances") {
        return b.mediaAppearances - a.mediaAppearances;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  };
  const sortedExperts = sortExperts(filteredExperts, sortCriteria);

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  return (
    <div>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="sorting-controls">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="citationCount">Citations</option>
          <option value="mediaAppearances">Media Appearances</option>
        </select>
      </div>
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sortedExperts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </div>
    </div>
  );
}
