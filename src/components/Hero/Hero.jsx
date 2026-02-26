import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Navbar />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            ART THAT SPEAKS
            <br />
            FOR NATURE
          </h1>
          <p className={styles.subtitle}>
            We draw attention to ecology
            <br />
            and animal protection
            <br />
            through creativity
            <br />
            and art installations
          </p>
        </div>

        <div className={styles.buttons}>
          <Link to="/events" className={styles.btnOutline}>
            Events{" "}
            <svg className={styles.iconBtnOutline}>
              <use href="/assets/sprite.svg#Arrow up-right" />
            </svg>
          </Link>
          <Link to="/apply" className={styles.btnFilled}>
            Apply Now{" "}
            <svg className={styles.iconBtnFilled}>
              <use href="/assets/sprite.svg#Arrow up-right" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
