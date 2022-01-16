import React from "react";

const SignUpForm = () => {
  return (
    <form className="mt-4">
      <label className="text-light">User Name</label>
      <input className="form-control" />
      <label className="mt-4 text-light">Password</label>
      <input className="form-control" />
      <label className="mt-4 text-light">Confirm Password</label>
      <input className="form-control mb-2" />
    </form>
  );
};

export default SignUpForm;
