import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" fill className={styles.image}></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.catagory}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit. Lorem ipsum dolor sit.
          </h1>
        </Link>
        <p className={styles.postDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At incidunt
          distinctio nisi voluptatibus voluptatem voluptatum porro praesentium
          maxime excepturi. Ab exercitationem repellat, quasi consequuntur
          aliquid neque iusto nostrum explicabo cumque. Officiis laudantium iure
          sed maiores!
        </p>
        <Link href='/' className={styles.button}>Read More</Link>
      </div>
    </div>
  );
}

export default Card
