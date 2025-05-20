import IntroCard from "../components/introCards/IntroCards";

import SliderHeader from "../components/sliderHeader/SliderHeader";
import Products from "../components/products/Products";
import Employees from "../components/staff/Staff";
import Newsletter from "../components/newsletter/Newsletter";
import Sponsers from "../components/sponsers/Sponsers";
import Footer from "../components/footer/Footer";


// Example logos – update the paths to your actual image paths
const logos = [
  "/sponsors/01.png",
  "/sponsors/02.png",
  "/sponsors/04.png",
  "/sponsors/03.png",
  
 
];

const Home = () => {
  return (
    <section>
      <SliderHeader />
      <IntroCard />
      <Products />
      <Employees />
      <Newsletter />
      <Sponsers logos={logos} />
      <Footer />
    </section>
  );
};

export default Home;
