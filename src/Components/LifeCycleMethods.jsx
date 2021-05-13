import React, { Component } from "react";

class LifeCycleMethods extends Component {
  //Mounting Phase
  // constructor,
  // getDerivedStateFromProps
  // render,
  // componentDidMount

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("CONSTRUCTOR life cycle here"); //mounting
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps life cycle here");
  }

  shouldComponentUpdate() {
    console.log("I am ShouldComponent Update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("GET DATA BEFORE DOM RENDERING AND STORE");
    return true;
  }
  componentDidMount() {
    console.log("ComponentDidMount life cycle method here");
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("ComponentDidUpdate");
    return null;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("Render method here"); //mounting and updating phase
    return (
      <div>
        <h1>count {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleMethods;
