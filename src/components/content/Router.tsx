import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';

const RouterComponent: React.FC = () => {
  return (
    <div>
      <h1>oooooooooooooooooooooooooo</h1>
      <Blog/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Blog/>}/>
        <Route path='/Portfolio-Blog/' element={<Blog/>}/>
        {/* <Route path='/Portfolio-Blog/Article/:postId' element={<Article />}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
