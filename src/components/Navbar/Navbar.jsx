import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        ECOGO <span>ART</span>
      </div>

      <ul className={styles.links}>
        <li>
          <NavLink>Ecogo</NavLink>
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
    </nav>
  );
};

export default Navbar;
