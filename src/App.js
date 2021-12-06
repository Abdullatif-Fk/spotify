import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useStateValue } from "./DataLayer";
import { setUser, setPlaylist } from "./Context/actions/Login";

const spotify = new SpotifyWebApi();
function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    setUser(dispatch);
    setPlaylist(dispatch);
  }, [dispatch]);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
