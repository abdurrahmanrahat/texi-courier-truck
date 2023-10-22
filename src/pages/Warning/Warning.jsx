import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="my-12 text-center font-semibold text-xl">
      I just made{" "}
      <Link to="/transport">
        <span className="text-[#ED1B24] underline">WHY SWIFT TRANSPORT</span>
      </Link>{" "}
      and <Link to="/"><span className="text-[#ED1B24] underline">FLEET</span></Link> page.
    </div>
  );
};

export default Warning;
