import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Events.module.css";

const currentEvents = [
  {
    id: 1,
    image: "/assets/images/FotoEvents-1.jpg",
    title: 'International Exhibition "Forest Echo"',
    date: "20.02.2026 – 15.03.2026",
    desc: "A large-scale painting exposition dedicated to the restoration of forest ecosystems after fires",
    btn: "Details",
    btnType: "outline",
  },
  {
    id: 2,
    image: "/assets/images/FotoEvents-2.jpg",
    title: 'Art Project "Clean Water"',
    date: "April 10, 2026",
    desc: "A competition to create an ecological installation from recycled plastic for a city park",
    btn: "Apply Now",
    btnType: "filled",
  },
  {
    id: 3,
    image: "/assets/images/FotoEvents-3.jpg",
    title: "Lecture Series: Art as a Tool for Change",
    date: "April 05, 2026, 18:00",
    desc: "An online meeting with eco-activists and artists discussing the impact of visual imagery on society",
    btn: "Details",
    btnType: "outline",
  },
];

const upcomingProjects = [
  {
    id: 1,
    image: "/assets/images/FotoProjects-1.jpg",
    title: 'Art Residency "Wild Symphony"',
    date: "May 2026",
    desc: "A field program for artists in Ukraine's nature reserves to create works from life",
    btn: "Details",
    btnType: "filled",
  },
  {
    id: 2,
    image: "/assets/images/FotoProjects-2.jpg",
    title: "Digital Eco-Art: Cyber Reality",
    date: "June 2026",
    desc: "A digital art contest supporting endangered bird species listed in the Red Data Book",
    btn: "Details",
    btnType: "filled",
  },
  {
    id: 3,
    image: "/assets/images/FotoProjects-3.jpg",
    title: 'Sculpture Park "Second Life"',
    date: "July 2026",
    desc: "An exhibition of sculptures crafted from industrial waste and metal scrap in a city park",
    btn: "Details",
    btnType: "filled",
  },
];

const EventCard = ({ event, dark = false }) => (
  <div className={`${styles.card} ${dark ? styles.cardDark : ""}`}>
    <div className={styles.cardImageWrap}>
      <img src={event.image} alt={event.title} className={styles.cardImage} />
    </div>
    <div className={styles.cardBody}>
      <h3 className={styles.cardTitle}>{event.title}</h3>
      <p className={styles.cardDate}>{event.date}</p>
      <p className={styles.cardDesc}>{event.desc}</p>
      <button
        className={
          event.btnType === "filled" ? styles.btnFilled : styles.btnOutline
        }
      >
        {event.btn}
      </button>
    </div>
  </div>
);

const Slider = ({ items, dark = false }) => {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        <div className={styles.desktopGrid}>
          {items.map((event) => (
            <EventCard key={event.id} event={event} dark={dark} />
          ))}
        </div>

        <div className={styles.mobileCard}>
          <EventCard event={items[current]} dark={dark} />
        </div>
      </div>

      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={styles.arrow} onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleSpan}>ECOGO ART</span> EVENTS
            </h1>
            <p className={styles.heroDesc}>
              Exhibitions, contests, and events uniting art and ecology
            </p>
            <p className={styles.heroDesc}>
              Here, we share the project's latest events — spaces for dialogue,
              creativity, and collective action
            </p>
            <p className={styles.heroDesc}>
              Every Ecogo Art event is an opportunity to experience art as a
              tool for change
            </p>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>CURRENT EVENTS</h2>
        </div>
        <Slider items={currentEvents} dark={true} />
      </section>

      {/* ===== UPCOMING PROJECTS ===== */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleDark}>UPCOMING PROJECTS</h2>
        </div>
        <Slider items={upcomingProjects} dark={false} />
      </section>
    </div>
  );
};

export default Events;
