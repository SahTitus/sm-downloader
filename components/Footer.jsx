import React from "react";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <h1>SM DOWNLOADER</h1>
      </div>

      <div className={styles.info}>
        <div className={styles.info__options}>
          <p>About</p>
          <p>FAQ</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className={styles.followUs}>
        <h3>Follow us</h3>
        <div className={styles.followUs__icons}>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>

      <div className={styles.contactUs}>
        <h3>Contact us</h3>
        <div>
          <p>Tel: +233 595 631 886</p>
          <p>Email: sahtitus58@gmail.com</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <svg
          className={styles.copyrightIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
        </svg>
        <p> 2022 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
