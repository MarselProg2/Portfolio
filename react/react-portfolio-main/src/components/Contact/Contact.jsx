import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Kontakt</h2>
        <p>Ich freue mich auf Ihre Nachricht!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:marselvadlja2016@outlook.de">marselvadlja2016@outlook.de</a>
        </li>
      </ul>
    </footer>
  );
};
