import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./SliderHeader.module.css";

const backgrounds = ["/headerslider/01.jpg", "/headerslider/02.jpg", "/headerslider/03.jpg"];

const SliderHeader = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
  };

  return (
    <header
      className={styles.sliderHeader}
      style={{ backgroundImage: `url(${backgrounds[index]})` }}
    >
      <div className={styles.sliderContent}>
        <h1>Gowala Farms</h1>
        <h2>The Complete Milk</h2>
        <button>Read More</button>
      </div>

      <div className={styles.sliderArrows}>
        <FaArrowLeft
          onClick={prevSlide}
          className={`${styles.arrow} ${styles.left}`}
        />
        <FaArrowRight
          onClick={nextSlide}
          className={`${styles.arrow} ${styles.right}`}
        />
      </div>
    </header>
  );
};

export default SliderHeader;
