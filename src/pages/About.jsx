import Articles from "../components/articles/Articles";
import Footer from "../components/footer/Footer";
import Sponsers from "../components/sponsers/Sponsers";
import ContactBg from "../../public/background/page_header_01.jpg";
import PageHeader from "../components/pageHeader/PageHeader";

// Example logos – update the paths to your actual image paths
const logos = ["/sponsors/04.png", "/sponsors/03.png"];

const About = () => {
  return (
    <section>
      <PageHeader
        title="Gowala tilbyder"
        subtitle="Hvad vi tilbyder vores forbrugere"
        background={ContactBg}
      />
      <Articles />
      <Sponsers logos={logos} />
      <Footer />
    </section>
  );
};

export default About;
