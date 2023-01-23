import React, { useState } from "react";
//import Bootstrap button addon
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.songFilter(search);
  }

  function handleClick() {
    props.getAllSongs();
  }

  return (
    <InputGroup>
      <Form.Control
        onSubmit={(e) => handleSubmit(e)}
        id="formSearch"
        typeof="search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button type="submit" id="search-btn" variant="dark">
        🔍
      </Button>
      <Button id="getAllSongs-btn" onClick={handleClick} variant="dark">Get All Songs</Button>
    </InputGroup>
  );
};

export default SearchBar;
