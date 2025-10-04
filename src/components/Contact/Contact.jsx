import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SplitText from "../Design/SplitText";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const handleAnimationComplete = () => {
    console.log('Animation complete!');
};

export const Contact = () => {
    return (
        <section className={styles.container} id="contact">
            <SplitText className={styles.title}
                text="Contact"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                tag="h1"
                onLetterAnimationComplete={handleAnimationComplete}
            />

            <h2 className={styles.heading} data-aos="fade-left">Let's Connect With Me!</h2>
            <p className={styles.text} data-aos="fade-right">
                Feel free to reach out for collaborations, projects, or just to say hi :)
            </p>

            <hr />

            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/michelle-aurelia-b66925382" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/MichelleAurelia" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/_michelleaureliaaaa" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a
                    href="https://wa.me/6285381859388"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </div>

            <p className={styles.credit}>Designed by Michelle Aurelia 2025</p>
        </section>
    );
};
