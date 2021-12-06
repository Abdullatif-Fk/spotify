import { getTokenFromUrl } from "../../spotify";

export const setPlaylist = (dispatch, spotify) => {
  spotify.getUserPlaylists().then((playlists) => {
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: playlists,
    });
  });
};
export const setUser = (dispatch, spotify) => {
  const hash = getTokenFromUrl();
  window.location.hash = "";
  const _token = hash.access_token;
  if (_token) {
    dispatch({
      type: "SET_TOKEN",
      token: _token,
    });
    localStorage.setItem("token", _token);
    spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    });
  }
};
