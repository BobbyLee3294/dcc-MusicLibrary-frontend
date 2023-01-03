import React, { useEffect, useState } from "react";

const MusicTable = (props) => {
  const [TableData, setTableData] = useState([]);
  useEffect(() => {
    let tempTableData = props.parentSongs.map((song) => {
      return [
        song.title,
        song.artist,
        song.album,
        song.release_date,
        song.genre,
        song.likes,
      ];
    });
    setTableData(tempTableData);
  }, [props.parentSongs]);
  return (
    <div>
      <h1>Songs</h1>
      {TableData.map(function (song, index) {
        return (
          <div key={index}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.release_date}</p>
            <p>{song.genre}</p>
            <p>{song.likes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MusicTable;
