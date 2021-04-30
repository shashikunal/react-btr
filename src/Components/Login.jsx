import React, { useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  //obChange event
  let handleChange = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value }); //updating react state by using hooks
  };

  //onSubmit event
  let handleSubmit = e => {
    e.preventDefault();
    console.log(loginForm);
  };
  return (
    <section className="card col-md-3 my-4 mx-auto">
      <article className="card-body">
        <h2 className="text-uppercase font-weight-bold text-center text-primary">
          login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              onChange={handleChange}
              value={loginForm.email}
              placeholder="enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={handleChange}
              value={loginForm.password}
              placeholder="enter Password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-success">Login</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
