import styles from "./footer.module.css";
import logo from "../../../public/logo/logo.png";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <div className={styles.topSection}>
          <img src={logo} alt="Gowala logo" className={styles.logo} />

          <p className={styles.description}>
            Gowala Farms er en dedikeret gård, der producerer friske
            mejeriprodukter og kvalitetskød med fokus på dyrevelfærd,
            bæredygtighed og autentisk smag.
          </p>

          <div className={styles.contact}>
            <div className={styles.contactRow}>
              <FaPhoneAlt className={styles.icon} />
              <div className={styles.textColumn}>
                <span>+88130-589-745-6987</span>
                <span>+1655-456-532</span>
              </div>
            </div>

            <div className={styles.contactRow}>
              <FaClock className={styles.icon} />
              <div className={styles.textColumn}>
                <span>Man - Fre 09:00 - 18:00</span>
                <span>(undtagen helligdage)</span>
              </div>
            </div>

            <div className={styles.contactRow}>
              <FaMapMarkerAlt className={styles.icon} />
              <div className={styles.textColumn}>
                <span>Mejerigade 14</span>
                <span>Mejeby</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>
          © 2024 <strong>Gowala</strong>. All rights Reserved by <br />
          <span className={styles.credit}>
            LabArtisian & Viborg Media College
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
