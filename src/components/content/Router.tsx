import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';
import About from './About';
import Othello from './Othello';

const RouterComponent: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/Article/:postId' element={<Article />}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Othello' element={<Othello/>}/>
      </Routes>
    </div>
  );
};

export default RouterComponent;
