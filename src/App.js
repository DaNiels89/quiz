import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Quiz from './components/Quiz'
import Home from './components/Home'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App () {
return(
  <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav className="mr-auto">
          <Nav.Link href="/quiz">Quiz</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
      <Switch>
        <Route path='/quiz'>
        <Quiz/>
        </Route>
        <Route path='/'>
        <Home/>
        </Route>
      </Switch>
    </Router>
  </div>
)}
export default App