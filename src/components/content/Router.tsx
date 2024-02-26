import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';

const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Portfolio-Blog/' element={<Blog/>}/>
        <Route path='/Portfolio-Blog/Article/:postId' element={<Article />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
