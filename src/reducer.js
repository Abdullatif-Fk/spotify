export const initialState = {
  user: null,
  playlists: [],
  artists: [],
  albums: [],
  isChoosen: false,
  item: null,
  token: null,
  // token:
    // "BQDdIDGken_ioxN6WlVlAWCDhBEv9RB2QfMFRX_s4GJGrfhYG2b_M7OgN816djBSIAeCYxyRcCAXKnWTuVe_OpSNcziSM0-TmqO5vFuAHzj843AWjKTrd6xpdauOi9GfhqdLHDwYXXo4ryHpk_DIFf0O-RyNVGepfQ5gaB8gcylcI7MH-z4_",
};
console.log(initialState.artists);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_ARTISTS":
      return {
        ...state,
        artists: action.artists,
      };
    default:
      return state;
  }
};
export default reducer;
