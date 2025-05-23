import Articles from "../components/articles/Articles";
import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import PageHeader from "../components/pageHeader/PageHeader";
import ContactBg from "../../public/background/page_header_01.jpg";


const Services = () => {
  return (
    <section>
      <PageHeader
        title="Gowala tilbyder"
        subtitle="Hvad vi tilbyder vores forbrugere"
        background={ContactBg}
      />
      <Articles />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Services;
