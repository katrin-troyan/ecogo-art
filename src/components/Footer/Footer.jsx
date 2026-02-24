import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            ECOGO <span>ART</span>
          </div>
          <p>Art as the voice of nature</p>
        </div>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Ecogo
              </NavLink>
            </li>
            <li>
              <a href="/#about" onClick={handleProjectsClick}>
                Projects
              </a>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apply"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Apply
              </NavLink>
            </li>
          </ul>

          <div className={styles.socials}>
            <a href="#">
              <svg className={styles.icon}>
                <use href="/assets/sprite.svg#ri_instagram-fill" />
              </svg>
            </a>

            <a href="#">
              <svg className={styles.icon}>
                <use href="/assets/sprite.svg#ic_baseline-telegram" />
              </svg>
            </a>

            <a href="#">
              <svg className={styles.icon}>
                <use href="/assets/sprite.svg#streamline-ultimate_read-email-at-1-bold" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright © Ecogo Art, 2026 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
