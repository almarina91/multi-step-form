import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile  from "./components/profile";
import Social from "./components/social";
import Review from "./components/review";

export default function App() {
  return (
      <Router>
        <div className="container">
          <nav className="navigationLinks">
            <ul>
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/social">Social</Link>
              </li>
              <li>
                <Link to="/review">Review</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/social">
              <Social />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}





