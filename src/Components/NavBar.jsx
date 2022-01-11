import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg'
function NavBar() {
    return (
        <nav className="mt-5">
            <Link to='/'><img id="logoImg" src={logo} alt=""/></Link>

            <span className="links">
            <Link to="/"><b>00</b> Home</Link>
            <Link to="/destination"><b>01</b> Destination</Link>
            <Link to="/crew"><b>02</b> Crew</Link>
            <Link to="/technology"><b>03</b> Technology</Link>
            </span>
        </nav>
    );
}

export default NavBar;