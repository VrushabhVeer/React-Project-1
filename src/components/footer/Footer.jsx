import React from 'react';
import styles from '../footer/Footer.module.css';
import { Link } from 'react-router-dom';
import Contact from '../contact us/Contact';

const Footer = () => {
  return (
    <div >
      <div class={styles.topFooter}>
        <div class={styles.adress}>
          <p>HAVE A QUESTIONS?</p>
          <p>
            203 Fake St. West View, San Francisco, California, USA,
            +91 1800 2004 3456
            info@shopmax.com
          </p>
        </div>
        <div className={styles.footer}>
          <p>Shipping Information</p>
          <p>Return Exchange</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.footer}>
          <p>Carrier</p>
          <p>
            <Link to="/Contact" style={{ textDecoration: 'none', color: 'white' }}>
              FAQ/Contact Us
            </Link>
          </p>
          <p>
            <Link to="/About" style={{ textDecoration: 'none', color: 'white' }}>
              About Us
            </Link>
          </p>
          <p>Journal</p>
        </div>
        <div className={styles.follow}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div class={styles.bottomFooter}>
        <p>Copyright ©2022 All rights reserved | ✨This website is made by Vrushabh Veer ✨</p>
      </div>
    </div>
  )
}

export default Footer;