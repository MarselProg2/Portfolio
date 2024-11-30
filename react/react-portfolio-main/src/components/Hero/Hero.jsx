import React from "react";

import styles from "./Hero.module.css";
import me from "./me.jpeg"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hallo ich bin Marsel</h1>
        <p className={styles.description}>
          Ich bin Student an Hochschule der Medien und studiere Wirtschaftsinformatik seit 2022
        </p>
        <a href="mailto:marselvadlja2016@outlook.de" className={styles.contactBtn}>
          Kontaktaufnahme
        </a>
      </div>
      <img
        src={me}
        alt="Marsel Vadlja"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
