import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <div className={`${styles.catagory} ${styles.travel}`}>Travel</div>
            <h3>The Last of Us Part II</h3>
            <div className={styles.detail}>
              <div className={styles.username}>Jhon</div>
              <div className={styles.date}>11.03.2024</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu
