import React, { Component } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import Register from "./Components/Register";

class App extends Component {
  render() {
    return (
      <section>
        <article>
          <header>
            <HeaderComponent />
          </header>
          <main>
            <Register />
          </main>
          <footer></footer>
        </article>
      </section>
    );
  }
}

export default App;
