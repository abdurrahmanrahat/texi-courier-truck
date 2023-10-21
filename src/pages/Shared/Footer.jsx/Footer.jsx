import "./Footer.css";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div>
      <div className="footer-div hidden bg-[#072953] px-8 md:px-20 pt-16 pb-10 text-white md:flex justify-between">
        {/* information */}
        <div>
          <h4 className="text-[18px] font-[500] mb-5">INFORMATION</h4>
          <ul className="list">
            <li>About us</li>
            <li>Careers</li>
            <li>Driver safety</li>
            <li>Contact us</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* CONTAINER TRANSPORT */}
        <div>
          <h4 className="text-[18px] font-[500] mb-5">CONTAINER TRANSPORT</h4>
          <ul className="list">
            <li>Convenience</li>
            <li>Location</li>
            <li>Live Unloads</li>
            <li>Side Loader Drops</li>
            <li>Imports and Exports</li>
            <li>50T Onsite Forklift</li>
            <li>Oversize, Overweight</li>
            <li>Dangerous Goods</li>
            <li>24/7 Operations</li>
            <li>Company Owned Fleet</li>
          </ul>
        </div>

        {/* Complete warehousing solutions */}
        <div>
          <h4 className="text-[18px] font-[500] mb-5">
            Complete warehousing solutions
          </h4>
          <ul className="list">
            <li>Short & Long Term</li>
            <li>Indoor & Outdoor Storage</li>
            <li>Racked, Dry & Floor Stacked</li>
            <li>Distribution</li>
            <li>Import, Unpack, Pack, Ship</li>
            <li>Sub-Leasing</li>
            <li>Secure Facilities</li>
            <li>Barcode Scanning</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="md:hidden">
        <MobileFooter></MobileFooter>
      </div>
    </div>
  );
};

export default Footer;
