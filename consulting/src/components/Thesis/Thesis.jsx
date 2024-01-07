import React from "react";
import styles from "./Thesis.module.scss";

const Thesis = () => {
  return (
    <div className={styles.thesis_wrapper}>
      <div className={styles.wrapper_info}>
        <article className={styles.informations}>
          <h1>Art Consulting</h1>
          <p>Making your journey to study in Australia memorable!</p>
        </article>
        <article className={styles.informations}>
          <p>
            Expert Education and Visa Services is a leading education and
            migration consultant agency with a global presence in 20 countries.
          </p>
          <p>
            We specialise in providing a wide range of services to students
            aspiring to study in Australia from counselling to helping with visa
            application processes. We also help international students to
            smoothly accommodate and settle with Australian life.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Thesis;
