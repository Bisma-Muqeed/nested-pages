import React from 'react'
import styles from './Footer.module.css'
import { FaPhoneAlt ,FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerHeading}>
        <h1>All Rights Reserved</h1>
      </div>
      <div className={styles.iconContainer}>
        <FaPhoneAlt className={styles.icon} />
        <IoLogoFacebook className={styles.icon} />
        <FaTwitter className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;