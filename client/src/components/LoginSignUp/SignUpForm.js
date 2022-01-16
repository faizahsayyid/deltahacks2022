import React from "react";

const SignUpForm = ({ setSignUpUser, signUpUser }) => {
  const onPasswordChange = (e) => {
    setSignUpUser({ ...signUpUser, password: e.target.value });
  };

  const onUsernameChange = (e) => {
    setSignUpUser({ ...signUpUser, username: e.target.value });
  };

  const onNameChange = (e) => {
    setSignUpUser({ ...signUpUser, name: e.target.value });
  };

  const onEmailChange = (e) => {
    setSignUpUser({ ...signUpUser, email: e.target.value });
  };
  return (
    <form className="mt-2">
      <label className="mt-1 text-light">Name</label>
      <input className="form-control" onChange={onNameChange} />
      <label className="mt-1 text-light">Username</label>
      <input className="form-control" onChange={onUsernameChange} />
      <label className="mt-1 text-light">Email</label>
      <input className="form-control" onChange={onEmailChange} />
      <label className="mt-1 text-light">Password</label>
      <input className="form-control" onChange={onPasswordChange} />
    </form>
  );
};

export default SignUpForm;
