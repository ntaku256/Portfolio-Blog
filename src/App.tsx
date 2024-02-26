import React from 'react';
import './App.css';
import RouterComponent from './components/content/Router';
import { BrowserRouter } from 'react-router-dom';

const BasePath = () =>{
  const basePath = process.env.PUBLIC_URL || "/";
  console.log(basePath)
  return <div>BasePath{basePath}</div>
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BasePath />
        <RouterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
