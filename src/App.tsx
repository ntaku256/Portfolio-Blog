import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Blog from "./components/content/Blog";
import Article from './components/content/Article';
import RouterComponent from './components/content/Router';

function App() {
  return (
    <div className="App">
      <RouterComponent/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
