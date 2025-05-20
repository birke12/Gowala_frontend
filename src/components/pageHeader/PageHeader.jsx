// components/PageHeader.jsx
import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subtitle, background }) => {
  return (
    <header
      className={styles.pageHeader}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </header>
  );
};

export default PageHeader;
