import React, { useState, useEffect } from "react";
import axios from "axios";
// import components
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSong from "./Components/AddSong/AddSong";

function App() {
  const baseURL = "http://127.0.0.1:8000/api/music/";
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    getAllSongs();
    console.log("Getting All Songs. Please wait...");
  }, []);

  async function getAllSongs() {
    const response = await axios.get(baseURL);
    console.log(response);
    setSongs(response.data);
  }

  function addNewSong(entry) {
    let tempNewSongs = [entry, ...songs];
    const response = axios.post(baseURL, tempNewSongs);
    console.log(response);
    setSongs(tempNewSongs);
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
        <SearchBar parentSongs={songs} />
      </div>
      <div id="MusicTable">
        <MusicTable parentSongs={songs} />
      </div>
    </div>
  );
}

export default App;
