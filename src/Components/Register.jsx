import React, { Component, Fragment } from "react";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleChange = e => {
    //update state in react use this.setState() method
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Fragment>
        <section id="authForm" className="card col-md-3 mx-auto bg-white my-4">
          <article className="card-body">
            <h2 className="h2 font-weight-bold text-uppercase text-success">
              Register
            </h2>
            <form id="registerForm" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="enter username"
                />
              </div>
              {/* username */}
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="enter email"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="enter password"
                />
              </div>
              {/* password */}
              <div className="form-group">
                <button className="btn btn-success btn-block">Register</button>
              </div>
              {/* button block */}
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default Register;
