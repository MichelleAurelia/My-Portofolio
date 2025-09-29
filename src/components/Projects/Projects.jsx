import React, { useState } from "react";
import SplitText from "../Design/SplitText";
import styles from "./Projects.module.css";
import projectPic1 from "../../assets/DiamondFigma.png";
import projectPic2 from "../../assets/EduFunFigma.png";
import projectPic3 from "../../assets/DiamondCutHome.png";
import projectPic4 from "../../assets/CulinariaFigma.png";
import projectPic5 from "../../assets/CulinariaHome.png";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

const handleAnimationComplete = () => {
    console.log("Animation complete!");
};

export const Projects = () => {
    const [hoverCard, setHoverCard] = useState(false);

    return (
        <section className={styles.section} id="projects">
            <SplitText
                className={styles.title}
                text="Projects"
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
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                     <article className={styles.cardArticle}>
                        <a className={styles.projectImgWrapper}>
                            <img
                                className={styles.projectImg}
                                src={projectPic1}
                                alt="DiamondCut Motors Figma Pict"
                            />
                        </a>
                        <div className={styles.cardData}>
                            <h2 className={styles.cardTitle}>DiamondCut Motors</h2>
                            <span className={styles.cardDesc}>UI/UX of a Luxury Car Showroom</span>
                            <a className={styles.cardBtn}
                                href="https://www.figma.com/design/Fsx5YTbRtdbpGtXziwX0Z6/Untitled?node-id=0-1&t=cYEFaq4QahvN05yz-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoverCard(true)}
                                onMouseLeave={() => setHoverCard(false)}
                            >
                                See here{" "}
                                {hoverCard ? <GoArrowUpRight className={styles.icon} /> : <GoArrowRight />}
                            </a>
                        </div>
                    </article>

                    <article className={styles.cardArticle}>
                        <a className={styles.projectImgWrapper}>
                            <img
                                className={styles.projectImg}
                                src={projectPic2}
                                alt="EduFUn Figma Pic"
                            />
                        </a>
                        <div className={styles.cardData}>
                            <h2 className={styles.cardTitle}>EduFun</h2>
                            <span className={styles.cardDesc}>UI/UX of a LMS Website</span>
                            <a className={styles.cardBtn}
                                href="https://www.figma.com/design/T5psZ0LH9sv3LvyU2LBp49/SE-Project-LMS?node-id=0-1&t=SwiNZPTHiccEoeM6-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoverCard(true)}
                                onMouseLeave={() => setHoverCard(false)}
                            >
                                See here{" "}
                                {hoverCard ? <GoArrowUpRight className={styles.icon} /> : <GoArrowRight />}
                            </a>
                        </div>
                    </article>

                    <article className={styles.cardArticle}>
                        <a className={styles.projectImgWrapper}>
                            <img
                                className={styles.projectImg}
                                src={projectPic3}
                                alt="DiamondCut Motors Web Pic"
                            />
                        </a>
                        <div className={styles.cardData}>
                            <h2 className={styles.cardTitle}>DiamondCut Motors</h2>
                            <span className={styles.cardDesc}>Responsive Front-End Prototype of a Car Showroom Website</span>
                            <a className={styles.cardBtn}
                                href="https://github.com/MichelleAurelia/DiamondCut-Motors"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoverCard(true)}
                                onMouseLeave={() => setHoverCard(false)}
                            >
                                See here{" "}
                                {hoverCard ? <GoArrowUpRight className={styles.icon} /> : <GoArrowRight />}
                            </a>
                        </div>
                    </article>

                    <article className={styles.cardArticle}>
                        <a className={styles.projectImgWrapper}>
                            <img
                                className={styles.projectImg}
                                src={projectPic4}
                                alt="Culinaria Figma Pic"
                            />
                        </a>
                        <div className={styles.cardData}>
                            <h2 className={styles.cardTitle}>Culinaria</h2>
                            <span className={styles.cardDesc}>UI/UX of a Recipe Book Website</span>
                            <a className={styles.cardBtn}
                                href="https://www.figma.com/design/CnusVj9ADeMTd5OGuAP6bN/Culinaria?node-id=0-1&t=8OM0B7bJqPgHFT6z-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoverCard(true)}
                                onMouseLeave={() => setHoverCard(false)}
                            >
                                See here{" "}
                                {hoverCard ? <GoArrowUpRight className={styles.icon} /> : <GoArrowRight />}
                            </a>
                        </div>
                    </article>

                    <article className={styles.cardArticle}>
                        <a className={styles.projectImgWrapper}>
                            <img
                                className={styles.projectImg}
                                src={projectPic5}
                                alt="Culinaria Web Pic"
                            />
                        </a>
                        <div className={styles.cardData}>
                            <h2 className={styles.cardTitle}>Culinaria</h2>
                            <span className={styles.cardDesc}>Responsive Front-End Prototype of a Recipe Book Website</span>
                            <a className={styles.cardBtn}
                                href="https://www.figma.com/design/CnusVj9ADeMTd5OGuAP6bN/Culinaria?node-id=0-1&t=8OM0B7bJqPgHFT6z-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoverCard(true)}
                                onMouseLeave={() => setHoverCard(false)}
                            >
                                See here{" "}
                                {hoverCard ? <GoArrowUpRight className={styles.icon} /> : <GoArrowRight />}
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};
