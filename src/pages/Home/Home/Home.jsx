import Contact from "../Contact/Contact";
import DeliverSection from "../DeliverSection/DeliverSection";
import GoodCompany from "../GoodCompany/GoodCompany";
import InfoSection from "../InfoSection/InfoSection";
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
      <DeliverSection></DeliverSection>
      <InfoSection></InfoSection>
    </div>
  );
};

export default Home;
