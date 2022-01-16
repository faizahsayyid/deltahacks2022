import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { FaTimes } from "react-icons/fa";

const LoginSignUp = ({ open, onClose, isLogin }) => {
  const [login, setLogin] = useState(isLogin);

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
              <div class="btn-group w-50">
                <button
                  type="button"
                  class={
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
                  class={
                    !login
                      ? "btn btn-success btn-lg"
                      : "btn btn-outline-secondary btn-lg"
                  }
                  onClick={() => setLogin(false)}
                >
                  Sign Up
                </button>
              </div>
              {login ? <LoginForm /> : <SignUpForm />}
              <button className="btn btn-outline-primary bg-light btn-lg mt-4">
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
