import React, { useState } from "react";
import SplitText from "../Design/SplitText";
import aboutPic from '../../assets/profile2.jpg';
import styles from "./About.module.css";

const handleAnimationComplete = () => {
    console.log('Animation complete!');
};

export const About = () => {
    const [toggle, setToggle] = useState(1);

    const updateToggle = (id) => {
        setToggle(id);
    };

    return (
        <section className={styles.container} id="about">
            <SplitText className={styles.title}
                text="About Me"
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
            <div className={styles.content}>
                <a className={styles.profileImgWrapper}>
                    <img className={styles.profileImg} src={aboutPic} alt="profile" />
                </a>
                <p className={styles.about}>
                    I'm a motivated Computer Science student at Bina Nusantara University with a sub-major in Software
                    Engineering. Experienced in academic projects, student organizations, and event organizing,
                    combining technical and interpersonal skills. Proficient in software development and programming
                    languages including Java, C, and Python, with a passion for learning new technologies and
                    collaborating on impactful projects. I am looking forward to opportunities where I can learn,
                    grow, and contribute.
                </p>
            </div>
            <div className={styles.bgBox}>
                <ul className={styles.navTabs}>
                    <a>
                        <li className={`${styles.tab} ${toggle === 1 ? 'is-active' : ''}`} onClick={() => updateToggle(1)}>Skills</li>
                    </a>
                    <a>
                        <li className={`${styles.tab} ${toggle === 2 ? 'is-active' : ''}`} onClick={() => updateToggle(2)}>Experience</li>
                    </a>
                    <a>
                        <li className={`${styles.tab} ${toggle === 3 ? 'is-active' : ''}`} onClick={() => updateToggle(3)}>Education</li>
                    </a>
                </ul>

                <div className={styles.tabContent}>
                    <div className={toggle === 1 ? styles.showContent : styles.tabPanel}>
                        <h1>Skills</h1>
                        <h3>Languages</h3>
                        <li>Indonesian</li>
                        <li>English</li>
                        <li>Korean</li>

                        <h3>Hard Skills</h3>
                        <li>Leadership</li>
                        <li>Team Work</li>
                        <li>Time Management</li>

                        <h3>Soft Skills</h3>
                        <li>Front End Web Development</li>
                        <li>Database Development</li>
                        <li>C, Java, Python</li>
                    </div>

                    <div className={toggle === 2 ? styles.showContent : styles.tabPanel}>
                        <h1>Experiences</h1>
                        <h3>Seni Tari Mahasiswa Bina Nusantara</h3>
                        <li>Activist of Support Division</li>
                        <li>Support Division Coordinator for Body Groove 2025</li>
                        <li>Safety & Crowd Management Division Vice Coordinator for Dance Camp 2025</li>
                        <li>Sponsorship and Partnership Staff for STAMRECITAL 2025</li>
                        <li>Creative Division Staff for TKU 2024</li>
                        <li>Public Relations Staff for Welcoming Party 2024</li>
                    </div>

                    <div className={toggle === 3 ? styles.showContent : styles.tabPanel}>
                        <h1>Education</h1>
                        <h3>Bina Nusantara University</h3>
                        <p>Computer Science Student, sub-major in Software Engineering</p>

                        <h3>Xaverius I Senior High School</h3>
                        <p>Natural Science Major</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
