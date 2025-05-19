import { useFetchArticles } from "../../hooks/useFetchArticles";
import ArticleSection from "../articleSection/ArticleSection";
import { useLocation } from "react-router-dom";

const Articles = () => {
  const { articles, isLoading, error } = useFetchArticles();
  const location = useLocation();

  // Example: only show 3 specific articles on Services page
  const servicesPageArticleIds = [
    "68244c65fee7ac2ab848c38c", // replace with your actual article _ids
    "68244c65fee7ac2ab848c38e",
    "68244c65fee7ac2ab848c390",
  ];

  const isServicesPage = location.pathname === "/services";

  const filteredArticles = isServicesPage
    ? articles.filter((article) => servicesPageArticleIds.includes(article._id))
    : articles;

  return (
    <section>
      
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filteredArticles.map((article) => (
          <ArticleSection key={article._id} article={article} />
        ))
      )}
    </section>
  );
};

export default Articles;
