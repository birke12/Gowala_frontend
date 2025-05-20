import { useLocation } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ReactClipLoader } from "../loading/ReactLoader";

const Products = ({ title, subtitle, text }) => {
  const { products, refetch, error, isLoading } = useFetchProducts();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const productsToDisplay = isHome ? products.slice(0, 4) : products;

  const defaultContent = {
    title: "Alle Produkter",
    subtitle: "Vi har udvalgt de bedste produkter",
    text: "Her finder du et udvalg af friske mejeriprodukter og kvalitetskød fra Gowala Farms – direkte fra gården til dit bord.",
  };

  const textContent = {
    title: title || defaultContent.title,
    subtitle: subtitle || defaultContent.subtitle,
    text: text || defaultContent.text,
  };

  if (isLoading) return <ReactClipLoader />;

  return (
    <article>
      <div className="staffTextContainer">
        <h1 className="staffTitle">{textContent.title}</h1>
        <h2 className="staffSubtitle">{textContent.subtitle}</h2>
        <p className="staffText">{textContent.text}</p>
      </div>
      <div className="grid">
        {error && <h5>{error}</h5>}
        {productsToDisplay.map((product) => (
          <ProductCard
            product={product}
            key={product._id}
            onProductCreated={refetch}
          />
        ))}
      </div>
    </article>
  );
};

export default Products;
