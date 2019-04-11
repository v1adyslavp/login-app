import React, { Component } from 'react';
import './App.css';
import {getUsers} from './api/users';

class App extends Component {
  componentDidMount() {
    getUsers().then(console.log)
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
