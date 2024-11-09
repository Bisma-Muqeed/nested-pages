import React from 'react';
import styles from './service.module.css';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.card}>
        <Image className={styles.cardImage} src="/Images/diggital card.jpg" alt="Digital Marketing" width = {150} height ={150} />
        <h2 className={styles.cardTitle}>Digital Marketing</h2>
        <p className={styles.cardDescription}>Boost your online presence with our expert digital marketing services Reach more customers and grow your business </p>
        <Link href="/services/digitalmarketing">
          <button className={styles.cardButton}>Learn More</button>
        </Link>
      </div>

      <div className={styles.card}>
        <Image src="/Images/graphic card.jpg" alt="Graphic Design" width = {150} height ={150}className={styles.cardImage} />
        <h2 className={styles.cardTitle}>Graphic Design</h2>
        <p className={styles.cardDescription}>Our graphic design services create visually appealing content to engage your audience and convey your message effectively </p>
        <Link href="/services/graphicdesigning">
          <button className={styles.cardButton}>Learn More</button>
        </Link>
      </div>

      <div className={styles.card}>
        <Image src="/Images/web card.jpg" alt="Web Design"width = {150} height ={150} className={styles.cardImage} />
        <h2 className={styles.cardTitle}>Web Design</h2>
        <p className={styles.cardDescription}>We design beautiful functional websites that improve user experience and drive traffic to your business </p>
        <Link href="/services/webdesignning">
          <button className={styles.cardButton}>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default page;
