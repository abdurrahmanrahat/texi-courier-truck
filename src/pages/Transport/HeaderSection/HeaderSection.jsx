import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

const HeaderSection = () => {
  return (
    <div className="hidden md:flex flex-col items-end w-full bg-gradient-to-r from-[#00152B] to-[#135495] text-white text-[13px] py-20 relative">
      <div className="absolute bottom-6 right-2 ">
        <ul className="flex  gap-6 text-[13px]">
          <ActiveLink to="/transport">
            <li>WHY SWIFT TRANSPORT</li>
          </ActiveLink>

          <ActiveLink to="/">
            <li>FLEET</li>
          </ActiveLink>

          <Link to="/warning">
            <li>COMPANY POLICIES</li>
          </Link>
          <Link to="/warning">
            <li>ABOUT US</li>
          </Link>
          <Link to="/warning">
            <li>CONTACT US</li>
          </Link>
        </ul>
        <div className="flex gap-6 text-[16px] pr-12 mt-4">
          <p className="bg-[#ED1B24] py-1 px-2 rounded-md">Swift Intermodal</p>
          <p>Container Transport Solutions</p>
          <p>Complete Warehousing Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
