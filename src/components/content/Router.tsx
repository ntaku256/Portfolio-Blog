import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';
import About from './About';

const RouterComponent: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/Article/:postId' element={<Article />}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
};

export default RouterComponent;
