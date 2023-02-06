import "/css/searchbar.css";
import React, { useState } from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-container">
      <label htmlFor="search-input">
        <i className="fa fa-search"></i>
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search by App name or description"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;