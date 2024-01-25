import React from 'react'
import styles from "./Featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hye Mehak Bahar here!</b> Discover my stories and Creative Ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit. Lorem ipsum dolor sit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            incidunt distinctio nisi voluptatibus voluptatem voluptatum porro
            praesentium maxime excepturi. Ab exercitationem repellat, quasi
            consequuntur aliquid neque iusto nostrum explicabo cumque. Officiis
            laudantium iure sed maiores!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured
