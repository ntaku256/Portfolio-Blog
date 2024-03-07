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
                <ul>
                    <li>
                        <Link to="/About">/About</Link>
                    </li>
                    <li>
                        <Link to="/">/Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;