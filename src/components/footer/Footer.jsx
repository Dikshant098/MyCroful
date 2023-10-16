import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerRoot}>
      <div className={styles.contain}>
        <p>&copy; 2023 Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
