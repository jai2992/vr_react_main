//app.js

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

*/

/*

import './App.css';
import Greeting from './greetings';
import './greeting.css';

const demoElement=<h1>Welcome to reactjs</h1>
const firstName ="sree"
const designation ="Engineer"
let isLoggedIn = true
function App() {
  return (
    <div className="App">
      {demoElement}
      <ul>
        <li>{firstName}</li>
        <li>{designation}</li>
      </ul>
      <h3> {
      isLoggedIn?(<h2>Hello !, {firstName} Welcome</h2>):(<h2>Hello! Anonymous user please login</h2>)}</h3>
      <h2>Demo content</h2>
      <Greeting/>
    </div>
  );
}

export default App;





// src/App.js// src/App.js
// src/App.js
// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can perform actual authentication here with a backend
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App" style={{ 
      background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', color: 'white' }}>
        <h1 style={{ fontSize: '2em', marginBottom: '20px' }}></h1>
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <button style={{ backgroundColor: '#3498db', color: 'white', padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '5px' }} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ padding: '10px', margin: '10px', width: '80%', borderRadius: '5px' }}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px', margin: '10px', width: '80%', borderRadius: '5px' }}
              />
            </label>
            <br />
            <button style={{ backgroundColor: '#3498db', color: 'white', padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '5px' }} onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

*/

import './App.css';
import {BrowserRouter as Router, Route ,Routes,Link} from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import Signin from './components/Signin';
import Pricing from './components/Pricing';
import About from './components/About';

//import { Route,Routes,link} from 

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="" element = {<Landing/>}></Route>
        <Route path="/" element = {<Landing/>}></Route>
        <Route path="/home" element = {<Home/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/pricing" element = {<Pricing/>}></Route>
        <Route path="/signin" element = {<Signin/>}></Route>
        {/* <Route path="/login" element = {<Login/>}></Route> */}

      </Routes>
      </Router>
      <simpleDemo/> 
      {/* <header/> 
      <home/>
      <about/>
      <contact/> */}
       </div>
  );
}

export default App;