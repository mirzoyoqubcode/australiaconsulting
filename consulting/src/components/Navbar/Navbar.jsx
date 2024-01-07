import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_nobg.png";
const Navbar = () => {
  return (
    <div className={styles.wrapper_nav}>
      <div>
        <Link to={"/"} className={styles.logo}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul className={styles.links}>
        <Link to={"/"} className={styles.link}>
          <li>Home</li>
        </Link>
        <Link to={"/about"} className={styles.link}>
          <li>About us</li>
        </Link>
        <Link to={"/university"} className={styles.link}>
          <li>Universities</li>
        </Link>
        <Link to={"/blog"} className={styles.link}>
          <li>Blog</li>
        </Link>
        <Link to={"/contact"} className={styles.link}>
          <li>Contact us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
