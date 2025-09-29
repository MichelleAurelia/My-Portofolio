import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <a href="/" className={styles.title}>Michelle.</a>
      </div>

      <div className={styles.menu}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} color="#fff" /> : <FaBars size={30} color="#fff" />}
        </button>

        <ul className={`${styles.menuItems} ${isOpen ? styles.active : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
