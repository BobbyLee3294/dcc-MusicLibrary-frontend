/**jsx file used for user to add songs to library */
import React, { useState } from "react";

const AddSong = (props) => {
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songAlbum, setSongAlbum] = useState("");
  const [songReleaseDate, setSongReleaseDate] = useState("");
  const [songGenre, setSongGenre] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      title: songTitle,
      artist: songArtist,
      album: songAlbum,
      releaseDate: songReleaseDate,
      genre: songGenre,
    };
    console.log(newSong);
    props.addNewSong(newSong);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="" method="post">
        <div id="songInfo">
          <div id="songTitle">
            <div>
              <label htmlFor="songTitle">
                Title:
                <input
                  type="text"
                  id="formTitle"
                  value={songTitle}
                  onChange={(event) => setSongTitle(event.target.value)}
                />
              </label>
            </div>
          </div>
          <div id="songArtist">
            <div>
              <label htmlFor="songArtist">
                Artist:
                <input
                  type="text"
                  id="formArtist"
                  value={songArtist}
                  onChange={(event) => setSongArtist(event.target.value)}
                />
              </label>
            </div>
          </div>
          <div id="songAlbum">
            <div>
              <label htmlFor="songAlbum">
                Album:
                <input
                  type="text"
                  id="formAlbum"
                  value={songAlbum}
                  onChange={(event) => setSongAlbum(event.target.value)}
                />
              </label>
            </div>
          </div>
          <div id="songReleaseDate">
            <div>
              <label htmlFor="songReleaseDate">
                Release Date:
                <input
                  type="date"
                  id="formReleaseDate"
                  value={songReleaseDate}
                  onChange={(event) => setSongReleaseDate(event.target.value)}
                />
              </label>
            </div>
          </div>
          <div id="songGenre">
            <div>
              <label htmlFor="songGenre">
                Genre:
                <input
                  type="text"
                  id="formGenre"
                  value={songGenre}
                  onChange={(event) => setSongGenre(event.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
        <div id="button group">
          <span id="submit-btn">
            <input type="submit" value="Add Song" />
          </span>
          <span id="resetInfo-btn">
            <input type="reset" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default AddSong;
