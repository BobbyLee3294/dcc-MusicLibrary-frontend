import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";

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
  return (
    <div>
      <div className="getAllSongs-btn">
        <button onClick={() => getAllSongs()}>Get All Songs</button>
      </div>
      <div className="MusicTable">
        <MusicTable parentSongs={songs} />
      </div>
    </div>
  );
}

export default App;
