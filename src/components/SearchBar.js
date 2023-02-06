//import "../css/searchbar.css";
import React, { useState } from "react";

const SearchBar = ({ placeholder,searchTerm, handleSearch }) => {
  return (
    <div style={{ display: "flex" }}>
      <span style={{ marginRight: "10px" }}>
        <i className="fa fa-search" aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchBar