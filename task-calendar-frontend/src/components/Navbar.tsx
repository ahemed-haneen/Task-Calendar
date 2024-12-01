import { NavLink } from "react-router-dom";
import "../styles/main.scss";
import { FC } from "react";
interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <div className="calendar-navbar">
      <NavLink to="/day" className="nav-btn">
        Day
      </NavLink>
      <NavLink to="/" className="nav-btn">
        Week
      </NavLink>
      <NavLink to="/month" className="nav-btn">
        Month
      </NavLink>
      <NavLink to="/year" className="nav-btn">
        Year
      </NavLink>
    </div>
  );
};

export default Navbar;
