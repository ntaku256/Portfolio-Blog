import React from 'react';
import './App.css';
import RouterComponent from './components/content/Router';
import Blog from './components/content/Blog';
import Article from './components/content/Article';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
