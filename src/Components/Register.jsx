import React, { Component, Fragment } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    //bind this key word
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    console.log(this); //undefined we dont want undefined needed bound this function
    //update state in react use this.setState() method
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <Fragment>
        <section id="authForm" className="card col-md-3 mx-auto bg-white my-4">
          <article className="card-body">
            <h2 className="h2 font-weight-bold text-uppercase text-success">
              Register
            </h2>
            <form id="registerForm" onSubmit={e => this.handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
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
                  onChange={e => this.handleChange(e)}
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
                  onChange={e => this.handleChange(e)}
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
