import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { FaTimes } from "react-icons/fa";
import useLoginSignUp from "../../hooks/useLoginSignUp";

const LoginSignUp = ({ open, onClose, isLogin }) => {
  const {
    login,
    setLogin,
    setSubmitted,
    setSignUpUser,
    setLoginUser,
    loginUser,
    signUpUser,
  } = useLoginSignUp(isLogin, onClose);

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  };

  const cardStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  };

  if (!open) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div style={overlayStyles}>
        <div className="card w-50 h-75 bg-primary" style={cardStyles}>
          <div className="card-body">
            <div className="w-100 d-flex justify-content-end">
              <FaTimes
                color="#fff"
                onClick={onClose}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <div className="btn-group w-50">
                <button
                  type="button"
                  className={
                    login
                      ? "btn btn-success btn-lg"
                      : "btn btn-outline-secondary btn-lg"
                  }
                  onClick={() => setLogin(true)}
                >
                  Login
                </button>
                <button
                  type="button"
                  className={
                    !login
                      ? "btn btn-success btn-lg"
                      : "btn btn-outline-secondary btn-lg"
                  }
                  onClick={() => setLogin(false)}
                >
                  Sign Up
                </button>
              </div>
              {login ? (
                <LoginForm loginUser={loginUser} setLoginUser={setLoginUser} />
              ) : (
                <SignUpForm
                  signUpUser={signUpUser}
                  setSignUpUser={setSignUpUser}
                />
              )}
              <button
                className="btn btn-outline-primary bg-light btn-lg mt-4"
                onClick={() => setSubmitted(true)}
              >
                {login ? "Login" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
};

export default LoginSignUp;
