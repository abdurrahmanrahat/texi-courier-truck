import Contact from "../Contact/Contact";
import GoodCompany from "../GoodCompany/GoodCompany";
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
      <GoodCompany></GoodCompany>
    </div>
  );
};

export default Home;
