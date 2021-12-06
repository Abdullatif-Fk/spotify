import React from "react";
import Footer from "../Footer/Footer";
import PlayList from "../PlayList/PlayList";
import SideBar from "../SideBar/SideBar";
import "./Player.css";
function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <PlayList />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
