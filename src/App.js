import React from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Helmet title="You Are Doing Great!" />
      {props.children}
    </div>
  );
}

export default App;
