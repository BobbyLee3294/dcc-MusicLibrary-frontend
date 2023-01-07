import React, { useState, useEffect } from "react";
import axios from "axios";
// import components
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSong from "./Components/AddSong/AddSong";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    console.log("Getting All Songs. Please wait...");
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response);
    setSongs(response.data);
  }

  function addNewSong(entry) {
    let tempSongs = [entry, ...songs];
    setSongs(tempSongs);
  }

  return (
    <div>
      <head>
        <h1>Your Music Library</h1>
      </head>
      <body>
        {/* <div id="getAllSongs-btn">
          <button onClick={() => getAllSongs()}>Get All Songs</button>
        </div> */}
        <div id="AddSong">
          <AddSong addNewSong={addNewSong} />
        </div>
        <div id="SearchBar">
          <SearchBar /> {/* possible child passing for filter */}
        </div>
        <div id="MusicTable">
          <MusicTable parentSongs={songs} />
        </div>
      </body>
    </div>
  );
}

export default App;
