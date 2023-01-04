import React, { useState } from "react";

const SearchBar = (props) => {
  const [userSearch, setUserSearch] = useState("");

  return (
    <div>
      <form action="">
        <div>
          <label>Search Bar</label>
          <div>
            <input
              type="text"
              id="searchBox"
              value={userSearch}
              onChange={(event) => setUserSearch(event.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
