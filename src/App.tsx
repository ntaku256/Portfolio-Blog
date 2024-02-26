import React from 'react';
import './App.css';
import RouterComponent from './components/content/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const basePath = process.env.PUBLIC_URL || "/";

  return (
    <BrowserRouter basename={basePath}>
      <div className="App">
        <RouterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
