import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="md:hidden bg-[#ED1B24] w-full flex justify-end">
      <IoCallOutline className="w-12 h-10 text-white p-2" />
      <div onClick={() => setIsOpenMenu(true)}>
        <GiHamburgerMenu className="w-12 h-10 text-white p-2" />
      </div>

      {isOpenMenu && (
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="p-5 bg-gray-950 rounded shadow-sm">
            {/* logo and close toggle icon */}
            <div className="flex items-center justify-between mb-8">
              <div>
                {/* <Link to="/"> */}
                <h1 className="text-3xl font-bold">
                  <span className="text-[#EE9322]">Contai</span>
                  <span className="text-[#9875ff]">Ner</span>
                </h1>
                {/* </Link> */}
              </div>
              <div onClick={() => setIsOpenMenu(false)}>
                <IoMdClose className="h-8 w-8 text-white" />
              </div>
            </div>

            <ul className="text-[14px] text-white flex flex-col gap-y-2">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
