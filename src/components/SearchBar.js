import React, { useState } from "react";

const SearchBar = ({ placeHolder,searchTerm, handleSearch }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <img src="/img/truecharts.png" style={{marginRight: '0.5em'}} width="24" height="24"/>
      <input id="search-input" type="text" placeholder={placeHolder} value={searchTerm} onChange={handleSearch} style={{flexGrow: 1, height: '40px', paddingLeft: '10px'}} />
</div>
  );
};

export default SearchBar;