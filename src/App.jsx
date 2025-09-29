import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Description } from "./components/Description/Description";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import LiquidEther from './components/Design/LiquidEther';
import { Navbar } from './components/Navbar/Navbar';  

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Description />
        <About />
        <Projects />
        <Contact />
      </div>
      <LiquidEther className={styles.liquidBackground}
        // colors={['#f8e1e7', '#e4b7c5', '#c89fa3']}
        colors={['#FBE8EB', '#FFDDE2', '#FFCAD4']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.2}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
}

export default App;