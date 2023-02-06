import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search charts..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-icon">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;