import { NavLink } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        ECOGO <span>ART</span>
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
    </nav>
  );
};

export default Navbar;
