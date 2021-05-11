import React, { Component } from "react";

const UsersData = WrappedComponent => {
  //class based Component for higher order
  class UsersObject extends Component {
    state = {
      username: "mani",
      age: 20,
      company: "Qspiders",
      salary: 40000,
    };
    render() {
      return <WrappedComponent Users={this.state} />;
    }
  }

  return UsersObject;
};

export default UsersData;
