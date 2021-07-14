import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';

export default function Authenticate({setlogin}) {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/login">login</Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path = "/">
          <Redirect to = "/login"/>
          </Route>
          <Route path = "/login">
          <Login />
          </Route>
          <Route path="/signup">
            <Signup setLogin = {setlogin}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}