import React from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet title="You Are Doing Great!" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<p>Hello Daryl</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
