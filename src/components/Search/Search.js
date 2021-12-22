import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import Artist from "../Artist/Artist";
import { useStateValue } from "../../DataLayer";
import {
  fetchSearchArtist,
  setArtistName,
  setArtistsAlbums,
} from "../../Context/actions/Search";
import Album from "../Album/Album";
function Search() {
  const [{ artists, token, isChoosen, albums }, dispatch] = useStateValue();
  const [artistName, setArtist] = useState("");

  const handleChange = (event) => {
    setArtist(event.target.value);
    setArtistName(artistName, dispatch);
    fetchSearchArtist(token, dispatch, artistName);
  };
  return (
    <div className="search">
      <div className="search__box">
        <input
          type="text"
          name=""
          placeholder="Search for an artist..."
          onChange={handleChange}
        />
        <SearchIcon className="search__icon" />
      </div>
      <div className="search__result">
        {!isChoosen ? (
          artists.length ? (
            artists.map((artist, key) => (
              <div
                key={key}
                onClick={() => {
                  setArtistsAlbums(token, artist.id, dispatch);
                }}
                className="search__artist"
              >
                <Artist artist={artist} />
              </div>
            ))
          ) : (
            <h4>type the artist name</h4>
          )
        ) : albums.length ? (
          albums.map((album, key) => (
            <div key={key} className="search__artist">
              <Album album={album} />
            </div>
          ))
        ) : (
          <h4>type the artist name</h4>
        )}
        {console.log(albums)}
        {console.log(artists)}
      </div>
    </div>
  );
}

export default Search;
