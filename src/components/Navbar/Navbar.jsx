import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div
          className={styles.logo}
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
        >
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
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className={styles.burgerIcon}>
            <use href="/assets/sprite.svg#hugeicons_menu-11" />
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg className={styles.burgerIcon}>
                <use href="/assets/sprite.svg#x-close" />
              </svg>
            </button>

            <ul className={styles.mobileLinks}>
              <li>
                <NavLink to="/" onClick={closeMenu}>
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
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apply"
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Apply
                </NavLink>
              </li>
            </ul>

            <div className={styles.mobileSocials}>
              <a href="#">
                <svg className={styles.modalIcon}>
                  <use href="/assets/sprite.svg#ri_instagram-fill" />
                </svg>
              </a>
              <a href="#">
                <svg className={styles.modalIcon}>
                  <use href="/assets/sprite.svg#ic_baseline-telegram" />
                </svg>
              </a>
              <a href="#">
                <svg className={styles.modalIcon}>
                  <use href="/assets/sprite.svg#streamline-ultimate_read-email-at-1-bold" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
