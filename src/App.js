import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Container fluid>
          <Switch>
            <Route path="/project" exact>
              <Project />
            </Route>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
