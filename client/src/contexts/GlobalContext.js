import GLOBAL_ACTIONS from "./GlobalActions";
import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
  token: "",
  isLoggedIn: false,
  username: "",
  sentiment: null,
  topicsCovered: null,
  isAnalysisLoading: false,
  question: "",
  audioURL: "",
};

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

  const setSentiment = (sentiment) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_SENTIMENT, payload: sentiment });
  };

  const setTopics = (topics) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_TOPICS, payload: topics });
  };

  const setIsAnalysisLoading = (isAnalysisLoading) => {
    dispatch({
      type: GLOBAL_ACTIONS.SET_IS_ANALYSIS_LOADING,
      payload: isAnalysisLoading,
    });
  };

  const setAudioUrl = (audioUrl) => {
    dispatch({
      type: GLOBAL_ACTIONS.SET_AUDIO_URL,
      payload: audioUrl,
    });
  };

  const setQuestion = (question) => {
    dispatch({
      type: GLOBAL_ACTIONS.SET_QUESTION,
      payload: question,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        username: state.username,
        sentiment: state.sentiment,
        topicsCovered: state.topicsCovered,
        isAnalysisLoading: state.isAnalysisLoading,
        question: state.question,
        audioURL: state.audioURL,
        setToken,
        setIsLoggedIn,
        setUsername,
        setSentiment,
        setTopics,
        setIsAnalysisLoading,
        setAudioUrl,
        setQuestion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
