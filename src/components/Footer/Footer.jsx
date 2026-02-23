import { NavLink } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            ECOGO <span>ART</span>
          </div>
          <p>Art as the voice of nature</p>
        </div>

        <ul className={styles.links}>
          <li>
            <NavLink to="/">Ecogo</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/apply">Apply</NavLink>
          </li>
        </ul>

        <div className={styles.socials}>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FaTelegramPlane />
          </a>
          <a href="#">
            <MdOutlineAlternateEmail />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright © Ecogo Art, 2026 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
