import GLOBAL_ACTIONS from "./GlobalActions";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case GLOBAL_ACTIONS.SET_TOKEN:
      return { ...state, token: true };
    case GLOBAL_ACTIONS.SET_USERNAME:
      return { ...state, username: true };
    default:
      return state;
  }
};

export default GlobalReducer;
