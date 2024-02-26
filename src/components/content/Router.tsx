import React from 'react';
import { BrowserRouter , Routes, Route , useLocation } from 'react-router-dom';
import Blog from './Blog';
import Article from './Article';

const PathDisplay = () => {
  const location = useLocation();

  return <div>Current Path: {location.pathname}</div>;
};

const RouterComponent: React.FC = () => {
  return (
    <div>
      <h1>oooooooooooooooooooooooooo</h1>
      <PathDisplay />
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/Article/:postId' element={<Article />}/>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default RouterComponent;
