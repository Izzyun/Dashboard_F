import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Scheduler </p>
        <form>
          <input
            placeholder="id"
            value=""
          />
          <input
            placeholder="pw"
            value=""
          />
          <button>LOGIN</button>
        </form>
      </div>
    );
  }
}

export default App;
