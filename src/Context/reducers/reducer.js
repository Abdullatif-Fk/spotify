import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_ARTISTS,
  SET_ARTISTS_NAME,
  SET_ARTISTS_ALBUMS,
  SET_ISCHOOSEN,
  REMOVE_TOKEN,
  REMOVE_USER,
} from "../ActionsTypes";

export const initialState = {
  user: null,
  playlists: [],
  artists: [],
  albums: [],
  isChoosen: false,
  item: null,
  artistName: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.artists,
      };
    case SET_ARTISTS_NAME:
      return {
        ...state,
        artistName: action.artistName,
      };
    case SET_ARTISTS_ALBUMS:
      return {
        ...state,
        albums: action.albums,
      };
    case SET_ISCHOOSEN:
      return {
        ...state,
        isChoosen: action.isChoosen,
      };
    default:
      return state;
  }
};
export default reducer;
