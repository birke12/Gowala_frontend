import Articles from "../components/articles/Articles";
import Footer from "../components/footer/Footer";
import Sponsers from "../components/sponsers/Sponsers";

// Example logos – update the paths to your actual image paths
const logos = ["/sponsors/04.png", "/sponsors/03.png"];

const About = () => {
  return (
    <section>
      <Articles />
      <Sponsers logos={logos} />
      <Footer />
    </section>
  );
};

export default About;
