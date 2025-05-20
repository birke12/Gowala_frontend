// components/Newsletter.jsx
import styles from "./newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>

      <h2 className={styles.heading}>Nyhedsbrev</h2>
      <p className={styles.highlight}>
        Få nyhederne
        <br />
        fra gården på
        <br />
        din mail.
      </p>
      <p className={styles.subtext}>
        Tilmeld dig vores nyhedsbrev –<br />
        så kan du altid følge med i,
        <br />
        hvad der sker på farmen.
      </p>

      </div>
      <form className={styles.form}>
        <input type="email" placeholder="Din email" className={styles.input} />
        <button type="submit" className={styles.button}>
          Tilmeld
        </button>
      </form>
    </div>
  );
}
