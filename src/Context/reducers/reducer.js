import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_ARTISTS,
  SET_ARTISTS_NAME,
  SET_ARTISTS_ALBUMS,
  SET_ISCHOOSEN,
  REMOVE_TOKEN,
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
  // token:
  //   "BQApDST-2R3NKBa7Gt91O3qd5MzH7IT-IBDc5PRDUFcjm1cMqSdUMPSzbgKZaoN4mAGMBgawHUhEoOFQlOK9FrHa3AqC23WeNqMv_Sqv36kmPB-JH1S82VIAqZmtXNkirXdoIkQZ7cFuOSlP_ata50uuEqilZjJvscfSIaxvMFJNOpwf25N-",
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
        token: null,
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
