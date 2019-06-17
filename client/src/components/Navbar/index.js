import React from "react";

function Navbar({children}) {
    return (
        <nav className="navbar">
            <a className="navbar-brand">Google Books</a>
            <ul className="navbar-nav">
                <li className="nav-item" id="navSearch">Search</li>
                <li className="nav-item" id="navSaved">Saved</li>
            </ul>
        </nav>
    );
}

export default Navbar