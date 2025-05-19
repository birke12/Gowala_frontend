import { useLocation } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ReactClipLoader } from "../loading/ReactLoader";

const Products = () => {
  const { products, refetch, error, isLoading } = useFetchProducts();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const productsToDisplay = isHome ? products.slice(0, 4) : products;

  const textContent = isHome
    ? {
        title: "Vores Hold",
        subtitle: "2000+ ansatte siden 1975",
        text: "De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og ekspertise sikrer sunde dyr og produkter af højeste kvalitet.",
      }
    : {
        title: "Alle Produkter",
        subtitle: "Opdag vores brede sortiment",
        text: "Her finder du hele udvalget af vores kvalitetsprodukter – nøje udvalgt til dig, der ønsker det bedste.",
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
