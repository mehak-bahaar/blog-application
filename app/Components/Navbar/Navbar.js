'use client'
import Link from 'next/link';
import React from 'react'
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import AuthLinks from '../AuthLinks/AuthLinks';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className={styles.socialIcons} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={styles.socialIcons} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faDiscord} className={styles.socialIcons} />
        </a>
      </div>
      <div className={styles.logo}>Code Inspo</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">Homepage</Link>
        <Link className={styles.link} href="/About">About</Link>
        <Link className={styles.link} href="/contact">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar
