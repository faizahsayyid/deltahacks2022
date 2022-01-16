import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalContext";

const useLoginSignUp = (isLogin, onClose) => {
  const [login, setLogin] = useState(isLogin);
  const [submitted, setSubmitted] = useState(false);
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const { setIsLoggedIn, setToken, setUsername } = useContext(GlobalContext);

  const handleLogin = (token, username) => {
    onClose();
    setIsLoggedIn(true);
    setToken(token);
    setSubmitted(false);
    setUsername(username);
  };

  useEffect(() => {
    if (isLogin && submitted) {
      axios
        .post("http://localhost:8080/api/user/login", loginUser)
        .then((res) => {
          handleLogin(res.data.data.token, loginUser.username);
        });
    } else if (submitted) {
      axios
        .post("http://localhost:8080/api/user/register", signUpUser)
        .then((res) => {
          axios
            .post("http://localhost:8080/api/user/login", {
              username: signUpUser.username,
              password: signUpUser.password,
            })
            .then((res) => {
              handleLogin(res.data.data.token, signUpUser.username);
            });
        });
    }
  }, [submitted]);

  return {
    login,
    setLogin,
    setSubmitted,
    setSignUpUser,
    setLoginUser,
    loginUser,
    signUpUser,
  };
};

export default useLoginSignUp;
