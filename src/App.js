import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useStateValue } from "./DataLayer";
import axios from "axios";

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();
  // const api = "https://api.spotify.com/v1/search?q=nancy&type=artist";
  const api =
    "https://api.spotify.com/v1/artists/0LnHdW6HMPoOlNdhG3DHjE/albums";
  useEffect(() => {
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        // console.log(res.data.artists);
        console.log(res);
      })
      .catch((error) => console.log(error));

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    console.log("🙇 ", user);
    console.log("🙇 ", token);

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });
  }, []);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
