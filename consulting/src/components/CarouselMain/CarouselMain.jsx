import React from "react";
import styles from "./CarouselMain.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/images/back1.jpg";
import image2 from "../../assets/images/back2.jpg";
import image3 from "../../assets/images/back3.jpg";
import image4 from "../../assets/images/back4.jpg";
const CarouselMain = () => {
  return (
    <div className={styles.carousel}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        interval={3000}
      >
        <div className={styles.slide_wrapper}>
          <img src={image1} />
        </div>
        <div className={styles.slide_wrapper}>
          <img src={image2} />
        </div>
        <div className={styles.slide_wrapper}>
          <img src={image3} />
        </div>
        <div className={styles.slide_wrapper}>
          <img src={image4} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
