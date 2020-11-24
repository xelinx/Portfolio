import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container fluid>
          <Switch>
            <Route path="/portfolio" exact>
              <Portfolio />
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
