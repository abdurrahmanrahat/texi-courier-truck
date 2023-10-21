import { BsArrowRight } from "react-icons/bs";
import ContactImg from "../../../assets/contact.png";

const Contact = () => {
  return (
    <div className="relative">
      <img src={ContactImg} alt="" />
      <div className="w-[620px] h-[230px] bg-[#072953] text-white px-10 py-8 rounded-se-[30px] absolute top-8 left-0">
        <p className="text-[32px]">
          Have a question regarding <br /> Swift services?
        </p>
        <div className="flex justify-end">
          <button className="text-[32px] font-semibold">
            Contact US <BsArrowRight className="text-5xl inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
