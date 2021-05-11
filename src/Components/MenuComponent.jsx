import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Profiles from "./Profiles";
const MenuComponent = props => {
  return (
    <Fragment>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" aria-disabled="true">
            contact us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" aria-disabled="true">
            {props.profile.trainer}
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Profiles(MenuComponent);
