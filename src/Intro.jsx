import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Intro = () => {
    return (
        <section className="intro-section " id="intro">
            <div className="profile-pic">
                <img src="Sakthi.png" />
            </div>
            <div className="desc ">
                <h1>
                    Hi,
                </h1>
                <h1>I'm <span className="name ">p.Sakthivel</span></h1>
                <h2>
                    Frontend Developer | MERN Stack Learner | Fresher (CSE Graduate)
                </h2>


                <p className="intro-description">
                    I’m a passionate Frontend Developer and a recent CSE graduate with strong skills in building clean, responsive, and user-friendly web applications. I have developed projects like a Food Delivery Website, Instagram UI Clone, EB Bill Calculator, and multiple Login & Signup pages.
                    I work with React, JavaScript, and basic backend concepts as I continue learning the MERN stack.
                    As a fresher, I’m eager to learn, build real-world applications, and grow into a full-stack developer.
                </p>

                <div className="contact-info ">
                    <a
                        href="https://github.com/sakthisakthi08"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="icon github-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ksakthi-vel0812/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="icon linkedin-icon" />
                    </a>
                    <a href="mailto:ksakthictbecse@gmail.com" aria-label="Email">
                        <MdEmail className="icon email-icon" />
                    </a>
                    <a
                        href="https://wa.me/917904685928"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="icon whatsapp-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;