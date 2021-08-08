export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove token value after finished developing
  //token:
    //"BQC_aiBkrbzDDG0ONSZAyb0o53Z4yETKiED46H7NdYtOzMaVkxa5uM7mDAkYCxaPaNh7LxP-wSygBPtn6Bw-fnw-5_bapjrZJAdvw2w5bGka7MAL998dZWgbXxSz1eCmF6_nX1hJ-EkjlY2Q2zDtBaEO67O8rk1QZQ_N7sk3XvuwuL-T_w1m",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user, //payload is user
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
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
