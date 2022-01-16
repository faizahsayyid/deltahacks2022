import GLOBAL_ACTIONS from "./GlobalActions";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case GLOBAL_ACTIONS.SET_TOKEN:
      return { ...state, token: action.payload };
    case GLOBAL_ACTIONS.SET_USERNAME:
      return { ...state, username: action.payload };
    case GLOBAL_ACTIONS.SET_TOPICS:
      return { ...state, topicsCovered: action.payload };
    case GLOBAL_ACTIONS.SET_SENTIMENT:
      return { ...state, sentiment: action.payload };
    case GLOBAL_ACTIONS.SET_IS_ANALYSIS_LOADING:
      return { ...state, isAnalysisLoading: action.payload };
    case GLOBAL_ACTIONS.SET_QUESTION:
      return { ...state, question: action.payload };
    case GLOBAL_ACTIONS.SET_AUDIO_URL:
      return { ...state, audioUrl: action.payload };
    default:
      return state;
  }
};

export default GlobalReducer;
