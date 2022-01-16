import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import InterviewPage from "./InterviewPage/InterviewPage";
import { GlobalProvider } from "../contexts/GlobalContext";
import LandingPage from "./LandingPage";
import Recordings from "./Recordings";
import FullAnalysis from "./FullAnalysis";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Header />
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/recordings">
            <Recordings />
          </Route>
          <Route exact path="/interview/:questionId">
            <InterviewPage />
          </Route>
          <Route exact path="/analysis/:recordingId">
            <FullAnalysis />
          </Route>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
