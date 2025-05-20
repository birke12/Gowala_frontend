import PageHeader from "../components/pageHeader/PageHeader";
import Products from "../components/products/Products";


const Shop = () => {
  return (
    <section>
      <PageHeader
        title="Gowala Shopping"
        subtitle="Vi er taknemmelige for dit bidrag"
        background="/background/page_header_01.jpg"
      />
      <Products
        title="Alle vores produkter"
        subtitle="Alt på ét sted"
        text="Her på siden finder du alle vores friske mejeriprodukter og kvalitetskød fra Gowala Farms – direkte fra gården til dit bord."
      />
    </section>
  );
};

export default Shop;
