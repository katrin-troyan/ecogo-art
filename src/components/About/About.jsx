import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.description}>
            Ecogo Art is an art platform that uses exhibitions, installations,
            and events to raise awareness about environmental issues and animal
            welfare
          </p>

          <div className={styles.pillars}>
            <span className={styles.pillarItem}>Platform pillars</span>

            <ul className={styles.pillarsList}>
              <li className={styles.pillarItem}>
                <svg className={styles.leafIcon}>
                  <use href="/assets/sprite.svg#file-icons_leaflet" />
                </svg>
                <span>Art — addressing vital topics</span>
              </li>

              <li className={styles.pillarItem}>
                <svg className={styles.leafIcon}>
                  <use href="/assets/sprite.svg#file-icons_leaflet" />
                </svg>
                <span>Ecology — making it closer and more understandable</span>
              </li>

              <li className={styles.pillarItem}>
                <svg className={styles.leafIcon}>
                  <use href="/assets/sprite.svg#file-icons_leaflet" />
                </svg>
                <span>
                  Collaboration — a hub for ideas, change, and partnership
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
