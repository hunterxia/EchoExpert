"use client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExpertCard from "./components/ExpertCard";
import useEventStore from "./store/eventStore";
import experts from "./data/experts_data.json";

export default function Home() {
  const searchQuery = useEventStore((state) => state.searchQuery);
  const setSearchQuery = useEventStore((state) => state.setSearchQuery);

  const filteredExperts = experts.filter((expert) => {
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

  return (
    <div>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {filteredExperts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </div>
    </div>
  );
}
