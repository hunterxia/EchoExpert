import { create } from "zustand";

const useEventStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useEventStore;
