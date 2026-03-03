import { Link } from "react-router-dom";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>

        <div className={styles.block}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              Want to join <span>Ecogo Art</span>?
            </h2>
            <p className={styles.desc}>
              Apply to join our exhibitions, initiatives, and upcoming art
              projects
            </p>
          </div>
          <Link to="/apply" className={styles.btnFilled}>
            Submit Application
          </Link>
        </div>

        <div className={styles.block}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              Want to stay updated with <span>Ecogo Art</span>?
            </h2>
            <p className={styles.desc}>
              Learn about exhibitions, contests, and art events happening within
              the project
            </p>
          </div>
          <Link to="/events" className={styles.btnOutline}>
            View Events
          </Link>
        </div>
    </section>
  );
};

export default CTA;
