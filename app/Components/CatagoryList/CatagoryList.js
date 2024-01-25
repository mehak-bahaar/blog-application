import React from 'react'
import styles from './CatagoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'


const CatagoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Catagories</h1>
      <div className={styles.catagories}>
        <Link
          href="blog/cat=style"
          className={`${styles.catagory} ${styles.style}`}
        >
          <Image
            className={styles.image}
            src="/style.jpeg"
            width={40}
            height={40}
            unoptimized
          ></Image>
          Style
        </Link>
        <Link
          href="blog/cat=fashion"
          className={`${styles.catagory} ${styles.fashion}`}
        >
          <Image
            className={styles.image}
            src="/fashion.jpeg"
            width={40}
            height={40}
            unoptimized
          ></Image>
          Fashion
        </Link>
        <Link
          href="blog/cat=food"
          className={`${styles.catagory} ${styles.food}`}
        >
          <Image
            className={styles.image}
            src="/food.jpeg"
            width={40}
            height={40}
            unoptimized
          ></Image>
          Food
        </Link>
        <Link
          href="blog/cat=travel"
          className={`${styles.catagory} ${styles.travel}`}
        >
          <Image
            className={styles.image}
            src="/travel.webp"
            width={40}
            height={40}
            unoptimized
          ></Image>
          Travel
        </Link>
        <Link
          href="blog/cat=culture"
          className={`${styles.catagory} ${styles.culture}`}
        >
          <Image
            className={styles.image}
            src="/culture.webp"
            width={40}
            height={40}
            unoptimized
          ></Image>
          Culture
        </Link>
        <Link
          href="blog/cat=coding"
          className={`${styles.catagory} ${styles.coding}`}
        >
          <Image
            className={styles.image}
            src="/coding.jpeg"
            width={40}
            height={40}
            unoptimized
          ></Image>
          Coding
        </Link>
      </div>
    </div>
  );
}

export default CatagoryList
