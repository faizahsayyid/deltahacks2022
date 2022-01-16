import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { isLoggedIn } = useContext(GlobalContext);

  const onLogin = () => {
    setIsLogin(true);
    setLoginPopupOpen(true);
  };
  const onSignUp = () => {
    setIsLogin(false);
    setLoginPopupOpen(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Interview Companion
        </Link>
        {!isLoggedIn ? (
          <div>
            <button className="btn btn-success me-2" onClick={onLogin}>
              Login
            </button>
            <button className="btn btn-secondary" onClick={onSignUp}>
              Sign Up
            </button>
          </div>
        ) : (
          <Link className="btn btn-success me-2" to="/recordings">
            Past Recordings
          </Link>
        )}
        <LoginSignUp
          open={loginPopupOpen}
          onClose={() => setLoginPopupOpen(false)}
          isLogin={isLogin}
        />
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link">Past Recordings</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
