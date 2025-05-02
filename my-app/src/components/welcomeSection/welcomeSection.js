import React from "react";
import "./welcomeSection.css";
import juliaPhoto from "../../images/juliaPhoto.png";

const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="hero">
                <h1 className="hero-title">Julia's Designs</h1>
                <h3 className="hero-caption">My Little Things</h3>
            </div>
            <div className="hero-image">
                <img
                    src={juliaPhoto}
                    alt="Julia Photo"
                />
            </div>
        </div>
    )
}

export default WelcomeSection;