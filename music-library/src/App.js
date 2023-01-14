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
  /**
   * This filter function is used to filter through the database based on the value entered from the SearchBar component.
   * @param {String} value The string value retrieved from the component
   */
  function songFilter(value) {
    let matchingSongs = songs.filter((song) => {
      if (song.title.includes(value)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(matchingSongs);
    setSongs(matchingSongs);
  }
  return (
    <div>
      {/* <div id="getAllSongs-btn">
          <button onClick={() => getAllSongs()}>Get All Songs</button>
        </div> */}
      <div id="AddSong">
        <AddSong addNewSong={addNewSong} />
      </div>
      <div id="SearchBar">
        <SearchBar songFilter={songFilter} />
        {/* possible child passing for filter */}
      </div>
      <div id="MusicTable">
        <MusicTable parentSongs={songs} />
      </div>
    </div>
  );
}

export default App;
