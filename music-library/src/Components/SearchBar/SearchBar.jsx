import React, { useState } from "react";

const SearchBar = (props) => {
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setUserSearch(e.target.value);
  };
  
  return (
    <div>
      <form action="">
        <div id="inputSearch">
          <input
            type="search"
            id="formSearch"
            value={userSearch}
            onChange={handleChange}
          />
          <input
            type="submit"
            id="formSubmit"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
