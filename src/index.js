import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './index.css';
import App from './App';

const app = (
  <Router>
    <div>
      <h2>Welcome to my site</h2>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </App>
  </Router>
);

render(app, document.getElementById('root'));

