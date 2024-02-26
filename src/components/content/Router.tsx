import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';

const RouterComponent: React.FC = () => {
  return (
    <div>
      <h1>oooooooooooooooooooooooooo</h1>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/Article/:postId' element={<Article />}/>
      </Routes>
    </div>
  );
};

export default RouterComponent;
