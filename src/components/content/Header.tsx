import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";



const Header = () => {
    return (
        <header>
            <div className="logo">
                <Routes>
                    <Route path='/' element={<h1>ブログ</h1>}/>
                    <Route path='/About' element={<h1>About</h1>}/>
                    <Route path='/Article/:postId' element={<h1>記事詳細</h1>}/>
                </Routes>
            </div>

            <nav>
                <Routes>
                    <Route path='/About' element={
                        <ul>
                            <li>
                                <Link to="/About" className="select">/About</Link>
                            </li>
                            <li>
                                <Link to="/Othello">/Othello</Link>
                            </li>
                            <li>
                                <Link to="/" >/Blog</Link>
                            </li>
                        </ul> 
                    }/>
                    <Route path='*' element={
                        <ul>
                            <li>
                                <Link to="/About">/About</Link>
                            </li>
                            <li>
                                <Link to="/Othello" >/Othello</Link>
                            </li>
                            <li>
                                <Link to="/" className="select">/Blog</Link>
                            </li>
                        </ul> 
                    }/>
                    <Route path='/Othello' element={
                        <ul>
                            <li>
                                <Link to="/About">/About</Link>
                            </li>
                            <li>
                                <Link to="/Othello" className="select">/Othello</Link>
                            </li>
                            <li>
                                <Link to="/" >/Blog</Link>
                            </li>
                        </ul> 
                    }/>
                </Routes>
            </nav>
        </header>
    );
};

export default Header;