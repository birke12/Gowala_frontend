import styles from "./articleSection.module.css";
import Swal from "sweetalert2";
import { FaCheckSquare } from "react-icons/fa";

const ArticleSection = ({ article, onReadMore }) => {
  const handleReadMore = () => {
    Swal.fire({
      title: article.title,
      text: `Vil du læse mere om "${article.title}"?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Læs mere",
      cancelButtonText: "Luk",
    }).then((result) => {
      if (result.isConfirmed && onReadMore) {
        onReadMore(article);
      }
    });
  };

  return (
    <section className={styles.articleCard} onClick={handleReadMore}>
      <div className={styles.imageContainer}>
        <img src={article.image} alt={article.title} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{article.title}</h2>
        <p className={styles.description}>{article.description}</p>
        {article.list && article.list.length > 0 && (
          <ul className={styles.checkList}>
            {article.list.map((item, index) => (
              <li key={index}>
                <FaCheckSquare className={styles.icon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ArticleSection;
