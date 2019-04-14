import React from "react";
import App from './App';
import Clock from './Clock';
import Clock1 from './Clock1';
import Notfound from './Notfound';
import Counter from './Counter';
import prototype from './Prototype';
import Language from './Language';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app">Contact Form</Link>
          </li>
          <li>
            <Link to="/clock1">Clock1</Link>
          </li>
          <li>
            <Link to="/clock2">Clock2</Link>
          </li>
          <li>
            <Link to="/error">Error Boundary</Link>
          </li>
          <li>
            <Link to="/prototype">Protype</Link>
          </li>
          <li>
            <Link to="/i18">i18</Link>
          </li>
        </ul>

        <hr />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/app" component={App} />
            <Route path="/clock1" component={Clock} />
            <Route path="/clock2" component={Clock1} />
            <Route path="/error" component={Counter} />
            <Route path="/prototype" component={prototype} />
            <Route path="/i18" component={Language} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
