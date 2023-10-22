import { BsArrowRight } from "react-icons/bs";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-div bg-[#0729532a] ">
      <h2 className="">
        Cheaper delivery costs through innovative vehicle design
      </h2>

      <div className=" ">
        <p>
          OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU&lsquo;LL BE
          PLEASANTLY SUPRISED
        </p>
        <button className="">
          Taxi and Courier truck{" "}
          <BsArrowRight className="md:text-5xl inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
