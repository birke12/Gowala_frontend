import { useLocation } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ReactClipLoader } from "../loading/ReactLoader";

const Products = () => {
  const { products, refetch, error, isLoading } = useFetchProducts();
  const location = useLocation();

  // Limit to 4 products on the homepage
  const productsToDisplay =
    location.pathname === "/" ? products.slice(0, 4) : products;

  if (isLoading) return <ReactClipLoader />;

  return (
    <article>
      <h1>Produkter</h1>
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
