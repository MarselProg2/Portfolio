import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Über mich</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Entwickler</h3>
              <p>
              Ich bin ein engagierter Frontend-Entwickler mit Erfahrung in der 
              Entwicklung responsiver Webanwendungen und digitaler Lösungen
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Entwickler</h3>
              <p>
              Ich habe Erfahrung in der Entwicklung Backend-Systeme und APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
