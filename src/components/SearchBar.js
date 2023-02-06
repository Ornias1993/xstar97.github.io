//import "../css/searchbar.css";
import React, { useState } from "react";

const SearchBar = ({ placeholder, searchTerm, handleSearch }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <span style={{ marginRight: "10px", alignSelf: "center" }}>
        <i className="fa fa-search" aria-hidden="true" />
      </span>
      <input
        style={{ width: "100%" }}
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;