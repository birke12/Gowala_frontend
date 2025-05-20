import { useFetchArticles } from "../../hooks/useFetchArticles";
import ArticleSection from "../articleSection/ArticleSection";
import { useLocation } from "react-router-dom";

const Articles = () => {
  const { articles, isLoading, error } = useFetchArticles();
  const location = useLocation();

  const isServicesPage = location.pathname === "/services";
  const isAboutPage = location.pathname === "/om";

  const servicesPageArticleIds = [
    "68244c65fee7ac2ab848c38c",
    "68244c65fee7ac2ab848c38e",
    "68244c65fee7ac2ab848c390",
  ];

  const aboutPageArticleId = "68244c65fee7ac2ab848c392"; // ✅ Replace this with the actual _id you want to show

  const filteredArticles = isServicesPage
    ? articles.filter((article) => servicesPageArticleIds.includes(article._id))
    : isAboutPage
    ? articles.filter((article) => article._id === aboutPageArticleId)
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
