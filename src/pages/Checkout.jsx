
import Footer from "../components/footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";
import ContactBg from "../../public/background/page_header_01.jpg";
import Cart from "../components/cart/Cart";


const Checkout = () => {
  return (
    <section>
      <PageHeader
        title="Gowala shopping"
        subtitle="Færdiggør din bestilling"
        background={ContactBg}
      />
      <Cart />
    
      <Footer />
    </section>
  );
};

export default Checkout;
