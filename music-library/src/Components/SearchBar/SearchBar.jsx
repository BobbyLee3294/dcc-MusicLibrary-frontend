import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    // console.log(searchValue); 
    setSearchInput(searchValue);
  };

  const handleChange = (e) => {
    e.preventDefault();
    searchItems(e.target.value);
  };

  return (
    <div>
      <form action="">
        <div id="inputSearch">
          <input
            type="search"
            id="formSearch"
            value={searchInput}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
