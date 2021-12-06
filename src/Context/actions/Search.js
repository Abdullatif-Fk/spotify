import axios from "axios";
export const setArtistName = (artistName, dispatch) => {
  dispatch({
    type: "SET_ARTISTS_NAME",
    artistName: artistName,
  });
};
export const setArtistsAlbums = (token, id, dispatch) => {
  console.log("hello");
  const api = `https://api.spotify.com/v1/artists/${id}/albums`;
  try {
    if (token) {
      axios
        .get(api, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          dispatch({
            type: "SET_ARTISTS_ALBUMS",
            albums: res.data.items,
          });
          dispatch({
            type: "SET_ISCHOOSEN",
            isChoosen: true,
          });
        })
        .catch((error) => console.log(error));
    }
  } catch (err) {
    console.error("setArtistsAlbums ", err);
  }
};
export const fetchSearchArtist = async (token, dispatch, artistName) => {
  const api = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
  try {
    if (token) {
      axios
        .get(api, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          dispatch({
            type: "SET_ARTISTS",
            artists: res.data.artists.items,
          });
        })
        .catch((error) => console.log(error));
      dispatch({
        type: "SET_ISCHOOSEN",
        isChoosen: false,
      });
    }
  } catch (err) {
    console.error("fetchSearchArtist ", err);
  }
};
