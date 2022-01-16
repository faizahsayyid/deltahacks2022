import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import InterviewPage from "./InterviewPage/InterviewPage";
import { GlobalProvider } from "../contexts/GlobalContext";
import LandingPage from "./LandingPage";

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
            <div>Recordings</div>
          </Route>
          <Route exact path="/interview/:questionId">
            <InterviewPage />
          </Route>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
