import React, { useState, useEffect } from "react";
import axios from "axios";
// import components
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSong from "./Components/AddSong/AddSong";
//import CSS styling
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const baseURL = "http://127.0.0.1:8000/api/music/";

  useEffect(() => {
    getAllSongs();
    console.log("Getting All Songs. Please wait...");
  }, []);

  async function getAllSongs() {
    const response = await axios.get(baseURL);
    console.log(response);
    setSongs(response.data);
  }

  async function addNewSong(entry) {
    const response = await axios.post(baseURL, entry);
    if (response.status === 201) {
      await getAllSongs();
    }
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
      <header>
        <div className="container">
          <div className="row" id="header">
            Music Library
          </div>
        </div>
      </header>
      <div className="container-fluid" id="background-img">
        <div className="row">
          <div className="col-md-3">
            <div className="border-box" id="AddSong">
              <AddSong addNewSong={addNewSong} />
              {/* <span id="getAllSongs-btn">
                <button onClick={() => getAllSongs()}>Get All Songs</button>
              </span> */}
            </div>
          </div>
          <div className="col-md-9">
            <div className="border-box" id="SearchBar">
              <span id="SearchBar">
                <SearchBar songFilter={songFilter} />
                <div id="MusicTable">
                  <MusicTable parentSongs={songs} getAllSongs={getAllSongs}/>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
