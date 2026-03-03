import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <ul className={styles.grid}>
        <li className={styles.card}>
          <h3 className={styles.cardTitle}>
            Nature Inspired
            <br />
            Paintings
          </h3>
          <div className={styles.imageWrap}>
            <img
              src="/assets/images/fotoAbout-1.jpg"
              alt="Nature Inspired Paintings"
              className={styles.image}
            />
          </div>

          <p className={styles.cardDesc}>
            Art exhibitions dedicated to the beauty, fragility, and power of
            nature and humanity
          </p>
        </li>

        <li className={styles.card}>
          <h3 className={styles.cardTitle}>
            Ecological Art
            <br />
            Installations
          </h3>
          <div className={styles.imageWrap}>
            <img
              src="/assets/images/fotoAbout-2.jpg"
              alt="Ecological Art Installations"
              className={styles.image}
            />
          </div>

          <p className={styles.cardDesc}>
            Spatial art objects that draw attention to environmental problems
          </p>
        </li>

        <li className={styles.card}>
          <h3 className={styles.cardTitle}>
            Global Art & Eco
            <br />
            Initiatives
          </h3>
          <div className={styles.imageWrap}>
            <img
              src="/assets/images/fotoAbout-3.jpg"
              alt="Global Art & Eco Initiatives"
              className={styles.image}
            />
          </div>

          <p className={styles.cardDesc}>
            Events, collaborations, and activities that unite art with ecology
          </p>
        </li>

        <li className={styles.card}>
          <h3 className={styles.cardTitle}>
            Animal Protection &<br />
            Responsibility
          </h3>
          <div className={styles.imageWrap}>
            <img
              src="/assets/images/fotoAbout-4.jpg"
              alt="Animal Protection & Responsibility"
              className={styles.image}
            />
          </div>

          <p className={styles.cardDesc}>
            Projects and initiatives aimed <br /> at supporting and protecting
            animals worldwide
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
