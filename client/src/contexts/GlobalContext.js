import GLOBAL_ACTIONS from "./GlobalActions";
import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = { token: "", isLoggedIn: false, username: "" };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setToken = (token) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_TOKEN, payload: token });
  };
  const setIsLoggedIn = (isLoggedIn) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_IS_LOGGED_IN, payload: isLoggedIn });
  };

  const setUsername = (username) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_IS_LOGGED_IN, payload: username });
  };

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        username: state.username,
        setToken,
        setIsLoggedIn,
        setUsername,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
