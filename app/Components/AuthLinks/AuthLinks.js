'use client'
import React, { useState } from 'react'
import styles from './AuthLinks.module.css'
import Link from 'next/link';

const AuthLinks = () => {
  const [status, setStatus] = useState(true);
  const [open, setOpen] = useState(false);
  const onClick = () =>{
    setOpen(!open)
  }
  return (
    <>
      {status ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={onClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveNav}>
          <Link className={styles.link} href="/">
            Homepage
          </Link>
          <Link className={styles.link} href="/About">
            About
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
          {status ? (
            <Link className={styles.link} href="/login">
              Login
            </Link>
          ) : (
            <>
              <Link className={styles.link} href="/write">
                Write
              </Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
export default AuthLinks
