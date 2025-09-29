import styles from "./Description.module.css";
import SplitText from "../Design/SplitText";
import profilePic from '../../assets/profile1.jpg';
import cvFile from '../../assets/CV.pdf';

const handleAnimationComplete = () => {
  console.log('Animation Complete');
};

export const Description = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <SplitText className={styles.title}
                text="Hello, I'm Michelle Aurelia!"
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
            <p className={styles.desc}>
            Passionate about software development, currently studying Computer Science at Bina Nusantara 
            University.
            </p>
            <a href={cvFile} download className={styles.downloadBtn}>Download CV</a>
        </div>

       <a className={styles.profileImgWrapper}>
            <img className={styles.profileImg} src={profilePic} alt="image1" />
        </a>
    </section>;
}