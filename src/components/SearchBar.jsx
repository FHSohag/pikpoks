import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search cards, contacts, leads..."
          className="ml-2 flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
