const MusicTable = (props) => {
  return (
    <div>
      <h1>Songs</h1>
      {props.parentSongs.map(function (song, index) {
        return (
          <div>
            <table>
              <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
                <th>Likes</th>
              </tr>
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>{song.likes}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default MusicTable;
