import React, { useState } from "react";

const SearchBar = ({ placeHolder,searchTerm, handleSearch }) => {
  return (
    <div className="search-container">
      <label htmlFor="search-input">
        <i className="fa fa-search"></i>
      </label>
      <input
        id="search-input"
        type="text"
        placeholder={placeHolder}
        value={searchTerm}
        onChange={handleSearch}
        style={{width: '100%'}}
      />
    </div>
  );
};

export default SearchBar;