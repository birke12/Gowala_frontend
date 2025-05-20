import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./sponsers.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sponsers = ({ logos }) => {
  const [startIndex, setStartIndex] = useState(0);
  const location = useLocation();
  const isAboutPage = location.pathname === "/om";

  const showNext = () => {
    if (startIndex + 2 < logos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleLogos = logos.slice(startIndex, startIndex + 2);

  return (
    <div className={styles.sliderContainer}>
      {!isAboutPage && (
        <button
          onClick={showPrev}
          disabled={startIndex === 0}
          className={styles.arrow}
        >
          <FaChevronLeft />
        </button>
      )}

      <div className={styles.logoContainer}>
        {visibleLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponser logo ${startIndex + index + 1}`}
            className={styles.logo}
          />
        ))}
      </div>

      {!isAboutPage && (
        <button
          onClick={showNext}
          disabled={startIndex + 2 >= logos.length}
          className={styles.arrow}
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default Sponsers;
