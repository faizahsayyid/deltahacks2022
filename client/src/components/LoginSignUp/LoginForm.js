const LoginForm = ({ setLoginUser, loginUser }) => {
  const onPasswordChange = (e) => {
    setLoginUser({ ...loginUser, password: e.target.value });
  };

  const onUsernameChange = (e) => {
    setLoginUser({ ...loginUser, username: e.target.value });
  };

  return (
    <form className="mt-4">
      <label className="text-light">User Name</label>
      <input className="form-control" onChange={onUsernameChange} />
      <label className="mt-4 text-light">Password</label>
      <input className="form-control mb-2" onChange={onPasswordChange} />
    </form>
  );
};

export default LoginForm;
