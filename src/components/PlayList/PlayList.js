import React from "react";
import LogOut from "../LogOut/LogOut";
import Search from "../Search/Search";
import "./PlayList.css";
function PlayList() {
  return (
    <div className="playlist">
      <LogOut />
      <Search />
    </div>
  );
}

export default PlayList;
