import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Profile  from "./components/profile";
import Social from "./components/social";
import Review from "./components/review";
import { SignupFormProvider } from './components/context';
import StepLinks from './components/stepLinks';

export default function App() {
  return (
      <SignupFormProvider>
      <Router>
        <div className="container">
          <StepLinks />
          <Switch>
            <Route path="/social">
              <Social />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/home">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
        </SignupFormProvider>
  );
}





