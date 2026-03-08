import Navbar from "../../components/Navbar/Navbar";
import styles from "./Apply.module.css";

const Apply = () => {
  return (
    <div className={styles.page}>
      <div className={styles.navbarWrap}>
        <Navbar />
      </div>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.topGrid}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                BECOME A PART OF
                <br />
                <span>ECOGO ART</span>
              </h1>

              <p className={styles.intro}>
                We believe that art has the power to change the world. If you
                are an artist, sculptor, photographer, or any creative soul who
                shares our values regarding nature conservation and animal
                protection — we invite you to join Ecogo Art projects! Together,
                we will create something truly meaningful
              </p>

              <div className={styles.block}>
                <h2 className={styles.blockTitle}>Who can apply</h2>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>Painters and visual artists;</span>
                  </li>

                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>Authors of art projects and installations;</span>
                  </li>

                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>Creative initiatives and collectives;</span>
                  </li>

                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>
                      Anyone with an idea or project at the intersection of art
                      and ecology.
                    </span>
                  </li>
                </ul>

                <p className={styles.note}>
                  We are open to various formats and fresh ideas
                </p>
              </div>

              <div className={styles.block}>
                <h2 className={styles.blockTitle}>What you can apply for</h2>

                <p className={styles.blockDesc}>
                  You can join Ecogo Art in the following areas:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>Participation in art exhibitions;</span>
                  </li>

                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>Creation of ecological art installations;</span>
                  </li>

                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>Engagement in art and eco-initiatives;</span>
                  </li>

                  <li className={styles.listItem}>
                    <svg className={styles.leafIcon}>
                      <use href="/assets/sprite.svg#file-icons_leaflet" />
                    </svg>
                    <span>
                      Partnerships and collaborations within the project.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.readyBlock}>
                <h2 className={styles.blockTitle}>Ready to apply?</h2>

                <p className={styles.readyDesc}>
                  Don’t delay your participation in projects that change the
                  world for the better. Join the Ecogo Art community today!
                </p>

                <p className={styles.readyBold}>
                  Go to our Telegram bot and start your registration.
                </p>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnTelegram}
                >
                  Open Telegram Bot
                </a>
              </div>
            </div>
          </div>

          {/* Ready to apply — мобілка */}
          <div className={styles.readyBlockMobile}>
            <h2 className={styles.blockTitle}>Ready to apply?</h2>

            <p className={styles.readyDesc}>
              Don't delay your participation in projects that change the world
              for the better. Join the Ecogo Art community today!
            </p>

            <p className={styles.readyBold}>
              Go to our Telegram bot and start your registration.
            </p>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnTelegram}
            >
              Open Telegram Bot
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apply;
