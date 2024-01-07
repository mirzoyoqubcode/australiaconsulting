import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CarouselMain from "../../components/CarouselMain/CarouselMain";
import styles from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import Thesis from "../../components/Thesis/Thesis";
const MainPage = () => {
  return (
    <div className={styles.wrapper_main}>
      <CarouselMain />
      <Navbar />
      <Header />
      <Thesis />
    </div>
  );
};

export default MainPage;
