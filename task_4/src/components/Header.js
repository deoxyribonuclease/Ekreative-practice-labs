import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="/" className="logo">
                    <div className="logo-icon"></div>
                    <span>Untitled UI</span>
                </a>

                <nav className="nav">
                    <div className="nav-item">
                        <Link to="/categories" className="nav-link">All</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/categories" className="nav-link">Nav-Links</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/categories" className="nav-link">Lead</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/categories" className="nav-link">To</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/categories" className="nav-link">Categories</Link>
                    </div>
                </nav>

                <div className="auth-buttons">
                    <button className="btn btn-login">Log in</button>
                    <button className="btn btn-signup">Sign up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;