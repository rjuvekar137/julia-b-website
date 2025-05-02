import React from "react";
import "./individualProject.css";
import {Link} from "react-router-dom";
import postureTracker from "../../../images/projects/postureTracker.png";
import wristTracker from "../../../images/projects/wristTracker.png";
import toyCar from "../../../images/projects/toyCar.png";
import sketches from "../../../images/projects/sketches.png";
import cad from "../../../images/projects/cad.png";
import photography from "../../../images/projects/photography.png";

const IndividualProjects = () => {
    const projects = [
        {
            id: 1,
            title: "Posture Tracker",
            photo: {src: postureTracker, alt: "posture tracker cover photo"},
            content: "Ensuring a better future with less back pain "
        },
        {
            id: 2,
            title:
                "Wrist Tracker",
            photo: {src: wristTracker, alt: "wrist tracker cover photo"},
            content: "2025 Stanford Center on Longevity Design Challenge"
        },
        {
            id: 3,
            title: "Toy Car",
            photo: {src: toyCar, alt: "toy car cover photo"},
            content: "Toy car designed for a 3-5 year old made out of plywood and EVA foam"
        },
        {
            id: 4,
            title: "Sketches",
            photo: {src: sketches, alt: "sketches cover photo"},
        },
        {
            id: 5,
            title: "CAD",
            photo: {src: cad, alt: "cad cover photo"},
        },
        {
            id: 6,
            title: "Photography",
            photo: {src: photography, alt: "photography cover photo"},
        },
    ];

    return (
        <section className="blog-posts">
            <div className="blog-section">
                <div className="projects-title">Projects</div>
                <div className="blog-container">
                    {projects.map((post) => (
                        <div key={post.id} className="blog-card">
                            <img src={post.photo.src} alt={post.photo.alt}/>
                            <div className="bottom-content">
                                <div className="blog-title">
                                    <Link
                                        to={`/blog/${post.id}`}
                                        state={{post}}
                                        className="blog-header"
                                    >
                                        {post.title}
                                    </Link>
                                </div>
                                <p>
                                    {post?.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndividualProjects;
