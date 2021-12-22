import React from "react";
import "./Album.css";
function Album(album) {
  const albumChoosen = {
    imageUrl: album.album.images[1].url,
    length: album.album.images.length,
    name: album.album.name,
    artistName: album.album.artists[0].name,
    date: album.album.release_date,
    tracks: album.album.total_tracks,
  };
  console.log(albumChoosen.length);

  return (
    <div className="album">
      <img
        className="album__image"
        src={
          albumChoosen.length
            ? albumChoosen.imageUrl
            : "https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg"
        }
        alt=""
      />
      <div className="album__info">
        <div className="album__artist__info">
          <p>{albumChoosen.name}</p>
          <small>{albumChoosen.artistName}</small>
        </div>
        <div className="album__date">
          <small>{albumChoosen.date}</small>
          <small>{albumChoosen.tracks} tracks</small>
        </div>
      </div>

      <div className="album__link">
        <small>
          <a
            rel="noreferrer"
            target="_blank"
            href={album.album.external_urls.spotify}
          >
            Preview on Spotify
          </a>
        </small>
      </div>
    </div>
  );
}

export default Album;
