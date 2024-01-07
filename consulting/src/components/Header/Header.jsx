import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Get Ready to experience</h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Global academic recognition",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Wide choice of subjects",
          1000,
          "Scolarship options",
          1000,
          "Diversity of students",
          1000,
          "Diversity of students",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block", color: "white" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Header;
