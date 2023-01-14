import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.songFilter(search);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="inputSearch">
          <input
            type="search"
            id="formSearch"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button id="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
