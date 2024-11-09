import React from 'react';
import styles from './contact.module.css';

const contact = () => {
  return (
    <div className={styles.contactFormContainer}>
      <h1 className={styles.formHeading}>Contact Us</h1>
      <form className={styles.contactForm}>
  <div className={styles.inputGroup}>
    <label htmlFor="name" className={styles.inputLabel}>Name</label>
    <input
      type="text"
      id="name"
      name="name"
      className={styles.inputField}
      required
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="email" className={styles.inputLabel}>Email</label>
    <input
      type="email"
      id="email"
      name="email"
      className={styles.inputField}
      required
    />
  </div>
  <div className={styles.inputGroup}>
    <label htmlFor="message" className={styles.inputLabel}>Message</label>
    <textarea
      id="message"
      name="message"
      className={styles.textArea}
      required
    ></textarea>
  </div>
  <button type="submit" className={styles.submitButton}>Submit</button>
</form>
</div>)}


export default contact;
