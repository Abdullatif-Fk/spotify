import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import Artist from "../Artist/Artist";
import { useStateValue } from "../../DataLayer";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
function Search() {
  // const [artistsList, setArtistsList] = useState([]);
  const [{ artists, token, isChoosen }, dispatch] = useStateValue();
  const api = "https://api.spotify.com/v1/search?q=nancy&type=artist";
  const chooseArtistHanler = (id) => {
    if (id) {
      axios
        .get(`https://api.spotify.com/v1/artists/${id}/albums`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          // setArtistsList(res.data.artists.items);
          // console.log(artistsList);
          // dispatch({
          //   type: "SET_ARTISTS",

          // });
        })
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    if (token) {
      axios
        .get(api, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          console.log(res.data.artists.items);
          // setArtistsList(res.data.artists.items);
          // console.log(artistsList);
          dispatch({
            type: "SET_ARTISTS",
            artists: res.data.artists.items,
          });
        })
        .catch((error) => console.log(error));
    }
    console.log(artists);
  }, []);
  return (
    <div className="search">
      <div className="search__box">
        <input type="text" name="" placeholder="Search for an artist..." />
        <SearchIcon className="search__icon" />
      </div>
      <div className="search__result">
        {!isChoosen ? (
          artists.length ? (
            artists.map((artist, key) => (
              <div
                key={key}
                onClick={chooseArtistHanler(artist.id)}
                className="search__artist"
              >
                <Artist artist={artist} />
              </div>
            ))
          ) : (
            <h4>type the artist name</h4>
          )
        ) : (
          <h4>bo choosen artist</h4>
        )}
        {/* {artists.length ? (
          artists.map((artist, key) => (
            <div className="search__artist">
              <Artist artist={artist} key={key} />
            </div>
          ))
        ) : (
          <h4>type the artist name</h4>
        )} */}
      </div>
    </div>
  );
}

export default Search;
