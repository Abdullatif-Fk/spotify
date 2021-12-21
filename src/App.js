import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useStateValue } from "./DataLayer";
import { setUser, setPlaylist } from "./Context/actions/Login";
import Header from "./components/Header/Header";

const spotify = new SpotifyWebApi();
function App() {
  const [{ token }, dispatch] = useStateValue();

  // const token = localStorage.getItem("token");
  useEffect(() => {
    setUser(dispatch, spotify);
    setPlaylist(dispatch, spotify);
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
