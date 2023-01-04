const MusicTable = (props) => {
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
