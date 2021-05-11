import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";
const HeaderComponent = props => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <MenuComponent users={props.users} />
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default HeaderComponent;
