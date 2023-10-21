import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[14px]" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
