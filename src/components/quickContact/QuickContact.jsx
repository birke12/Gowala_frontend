import styles from './quickContact.module.css';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const QuickContact = () => {
    return (
      <div className={styles.QuickContactContainer}>
        <h2 className={styles.title}>Hurtig Kontakt</h2>
        <p className={styles.text}>
          Har du spørgsmål eller ønsker du at høre mere om vores produkter?
          Kontakt os – vi står altid klar til at hjælpe!
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
    );
}

export default QuickContact;