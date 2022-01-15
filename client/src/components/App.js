import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import InterviewPage from "./InterviewPage/InterviewPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/">
          <div>Search Page</div>
        </Route>
        <Route exact path="/login">
          <div>Login/Sign up</div>
        </Route>
        <Route exact path="/interview/:questionId">
          <InterviewPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
