import React from "react";
import SidebarOption from "../SidebarOption/SidebarOption";
import "./SideBar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../../DataLayer";
function SideBar() {
  const [{ playlists }] = useStateValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        alt=""
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
      />
      <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title"> PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist, key) => (
        <SidebarOption title={playlist.name} key={key} />
      ))}
    </div>
  );
}

export default SideBar;
