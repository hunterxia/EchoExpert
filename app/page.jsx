"use client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExpertCard from "./components/ExpertCard";
import useEventStore from "./store/eventStore";
import experts from "./data/experts_data.json";
import citations from "./data/experts_citation.json";
import expertMediaAppearances from "./data/experts_news.json";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const searchQuery = useEventStore((state) => state.searchQuery);
  const setSearchQuery = useEventStore((state) => state.setSearchQuery);
  const [sortCriteria, setSortCriteria] = useState("name");

  experts.forEach((expert) => {
    const citationData = citations[expert.name];
    expert.citations = citationData ? citationData.length : 0;
    const mediaData = expertMediaAppearances[expert.name];
    expert.mediaAppearances = mediaData ? mediaData.length : 0;
  });

  const filteredExperts = experts.filter((expert) => {
    return (
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.fields.some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      expert.focus_areas.some((area) =>
        area.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  const sortExperts = (expertsArray, criteria) => {
    return expertsArray.slice().sort((a, b) => {
      switch (criteria) {
        case "citationsAsc":
          return a.citations - b.citations;
        case "citationsDesc":
          return b.citations - a.citations;
        case "mediaAppearancesAsc":
          return a.mediaAppearances - b.mediaAppearances;
        case "mediaAppearancesDesc":
          return b.mediaAppearances - a.mediaAppearances;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  };

  const sortedExperts = sortExperts(filteredExperts, sortCriteria);

  const handleSortChange = (value) => {
    setSortCriteria(value);
  };

  return (
    <div>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="flex justify-end pr-8">
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="citationsAsc">
              Citations (Low to High)
            </SelectItem>
            <SelectItem value="citationsDesc">
              Citations (High to Low)
            </SelectItem>
            <SelectItem value="mediaAppearancesAsc">
              Media Appearances (Low to High)
            </SelectItem>
            <SelectItem value="mediaAppearancesDesc">
              Media Appearances (High to Low)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="max-w-full mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sortedExperts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </div>
    </div>
  );
}
