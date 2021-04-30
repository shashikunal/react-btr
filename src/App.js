import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import HeaderComponent from "./Components/HeaderComponent";

class App extends Component {
  render() {
    return (
      <section>
        <article>
          <header>
            <HeaderComponent />
          </header>
          <main>
            <ContactForm />
          </main>
          <footer></footer>
        </article>
      </section>
    );
  }
}

export default App;
