import React from 'react';
import { Routes, Route , useLocation } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';

const PathDisplay = () => {
  const location = useLocation();

  return <div>Path: {location.pathname}</div>;
};

const RouterComponent: React.FC = () => {
  return (
    <div>
      <h1>oooooooooooooooooooooooooo</h1>
      <PathDisplay />
      <Routes>
        <Route path='/Portfolio-Blog/' element={<Blog/>}/>
        <Route path='/Portfolio-Blog/Article/:postId' element={<Article />}/>
      </Routes>
    </div>
  );
};

export default RouterComponent;
