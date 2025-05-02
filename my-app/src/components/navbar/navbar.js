import React from "react";
import {Link} from "react-router-dom";
import linkedinImg from '../../images/linkedin.png';
import instagramImg from '../../images/instagram.png';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="linkedin">
                <img
                    src={linkedinImg}
                    alt="Linkedin Icon"
                />
            </Link>
            <Link to="/" className="instagram">
                <img
                    src={instagramImg}
                    alt="Instagram Icon"
                />
            </Link>

            <div className="links">
                <Link to="/home" className="link">
                    Home
                </Link>
                <Link to="/about-us" className="link">
                    About Me
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
