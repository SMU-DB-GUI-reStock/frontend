import React, {Component} from 'react';
import './App.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://amznsellertools.com/wp-content/uploads/Restock-Pro-Logo.png"></img>
        <h2>Log in</h2>
        <label HTMLfor="username">Username</label>
        <input name="username" type="text"></input>
        <label HTMLfor="password">Password</label>
        <input name="password" type="password"></input>
        <button id="logIn">Log In</button>
        <button id="forgotPassword">Forgot Password?</button>
      </header>
    </div>
  );
}

export default App;
