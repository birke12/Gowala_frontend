import IntroCard from "../components/introCards/IntroCards";

import SliderHeader from "../components/sliderHeader/SliderHeader";
import Products from "../components/products/Products";
import Employees from "../components/staff/Staff";

const Home = () => {
  return (
    <section>
      <SliderHeader />
      <IntroCard />
      <Products />
      <Employees />
    </section>
  );
};

export default Home;
