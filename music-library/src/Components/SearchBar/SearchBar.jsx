import React, { useState } from "react";

const SearchBar = ({ songs }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    searchItems(e.target.value);
  };

  const searchItems = () => {
    let matchingSongs = songs.filter((song) => {
      if (song.title.includes(search)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(matchingSongs);
    setSearch(matchingSongs);
  };

  return (
    <div>
      <form action="">
        <div id="inputSearch">
          <input
            type="search"
            id="formSearch"
            value={search}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
