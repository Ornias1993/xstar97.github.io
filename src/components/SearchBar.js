import React, { useState } from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <>
      <i className="fa fa-search"></i>
      <input
        type="text"
        placeholder="Search by App name or description"
        value={searchTerm}
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchBar;