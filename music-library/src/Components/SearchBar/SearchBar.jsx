import React, { useState } from "react";

const SearchBar = (props) => {
  const [userSearch, setUserSearch] = useState("");
  
  return (
    <div>
      <form action="">
        <div id="inputSearch">
          <input
            type="search"
            id="formSearch"
            value={userSearch}
            onChange={(event) => setUserSearch(event.target.value)}
          />
        </div>
          <div id="search-btn">
            <input type="button" value="Search"/>
          </div>
      </form>
    </div>
  );
};

export default SearchBar;
