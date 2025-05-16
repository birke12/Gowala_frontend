import IntroCard from "../components/introCards/IntroCards";

import SliderHeader from "../components/sliderHeader/SliderHeader";
import Products from "./Products";

const Home = () => {
  return (
    <section>
      <SliderHeader />
      <IntroCard />
     <Products />
    </section>
  );
};

export default Home;
