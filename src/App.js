import React, { Component } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ContactForm from "./Components/ContactForm";
import PagenotFound from "./Components/PagenotFound";

//react router dom 4 version way
class App extends Component {
  render() {
    return (
      <section>
        <article>
          <Router>
            <header>
              <HeaderComponent />
            </header>
            <main>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <HomeComponent username="shashi" />}
                />
                {/* react router 4 way render component and  custom props. */}
                <Route path="/login" exact>
                  <Login username="shashikunal" />
                </Route>
                {/* react router 5 way render component and  custom props. */}
                <Route path="/register" exact component={Register} />
                <Route path="/contact" exact component={ContactForm} />
                <Route path="*" component={PagenotFound} />
              </Switch>
            </main>
            <footer></footer>
          </Router>
        </article>
      </section>
    );
  }
}

export default App;
