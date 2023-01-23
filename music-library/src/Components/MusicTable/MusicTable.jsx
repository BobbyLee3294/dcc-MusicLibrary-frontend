const MusicTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
          <th>Likes</th>
        </tr>
      </thead>
      <tbody>
        {props.parentSongs.map((song, index) => {
          return (
            <tr key={index}>
              <td id="tableTitle">{song.title}</td>
              <td id="tableArtist">{song.artist}</td>
              <td id="tableAlbum">{song.album}</td>
              <td id="tableReleaseDate">{song.release_date}</td>
              <td id="tableGenre">{song.genre}</td>
              <td id="tableLikes">{song.likes}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default MusicTable;
