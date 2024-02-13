import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <h1 className="flex text-4xl font-bold text-gray-800 mb-4">
        Echo Expert
      </h1>
      <h3 className="flex text-1xl font-bold text-gray-800 mb-4">
        Connecting Journalists to the World of Expertise
      </h3>

      <form
        className="flex w-full max-w-md flex-row items-center rounded-xl bg-black px-1 shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          autoComplete="off"
          type="text"
          placeholder="Find an expert..."
          className="h-10 w-full resize-none bg-transparent px-2 font-mono text-base text-white placeholder:text-gray-400 border-0 outline-none ring-0 focus:ring-0 transition-all duration-300"
          name="search"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          aria-disabled="false"
          className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg text-white outline-0 ring-0 hover:bg-white/25 focus-visible:bg-white/25"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
