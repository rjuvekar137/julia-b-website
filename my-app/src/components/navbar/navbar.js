import React from "react";
import {Link} from "react-router-dom";
import linkedinImg from '../../images/linkedin.png';
import instagramImg from '../../images/instagram.png';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="socials">
                <button className="linkedin">
                    <a href="https://www.linkedin.com/in/julia-botros/">
                        <img
                            src={linkedinImg}
                            alt="Linkedin Icon"
                        />
                    </a>
                </button>
                <button className="instagram">
                    <a href="https://www.instagram.com/my_little_things_jb/">
                        <img
                            src={instagramImg}
                            alt="Instagram Icon"
                        />
                    </a>
                </button>
            </div>

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
