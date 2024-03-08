import React from 'react';
import './App.css';
import RouterComponent from './components/content/Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/content/Header';
import background from './components/images/dark-wood-1920x1080.png';

function App() {
  const basePath = process.env.PUBLIC_URL || "/";

  return (
    <BrowserRouter basename={basePath}>
      <div className="App" style={{ 
      backgroundImage: `url(${background})` ,
      backgroundAttachment: "fixed",
      objectFit:'cover',
      }}>
        <Header/>
        <RouterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
