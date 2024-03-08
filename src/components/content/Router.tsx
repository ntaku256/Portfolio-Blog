import React from 'react';
import { Routes, Route , useLocation } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';
import About from './About';

const PathDisplay = () => {
  const location = useLocation();

  return <div>Path: {location.pathname}</div>;
};

const RouterComponent: React.FC = () => {
  return (
    <div>
      {/* <PathDisplay /> */}
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/Article/:postId' element={<Article />}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
};

export default RouterComponent;
