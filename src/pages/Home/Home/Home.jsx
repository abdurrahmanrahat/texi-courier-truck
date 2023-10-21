import Contact from "../Contact/Contact";
import News from "../News/News";
import Services from "../Services/Services";
import Slide from "../Slider/Slide";
import TruckSection from "../TruckSection/TruckSection";

const Home = () => {
  return (
    <div>
      <Slide></Slide>
      <TruckSection></TruckSection>
      <Services></Services>
      <News></News>
      <Contact></Contact>
    </div>
  );
};

export default Home;
