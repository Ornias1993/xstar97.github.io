import React, { useState } from "react";

const SearchBar = ({ placeHolder,searchTerm, handleSearch }) => {
  return (
    <div style={{
      borderRadius: '0.5em',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 0px 10px 0px #c8c8c8',
      padding: '1em',
      display: 'inline-block'
    }}>
      <input
        id="search-input"
        type="text"
        placeholder={placeHolder}
        value={searchTerm}
        onChange={handleSearch}
        style={{width: '100%', height: '18px'}}
      />
    </div>
  );
};

export default SearchBar;