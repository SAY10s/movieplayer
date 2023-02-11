import { NavLink } from "react-router-dom";
const Tabs = () => {
  return (
    <div className="tabs">
      <NavLink
        to="/samouczek"
        className={({ isActive }) => (isActive ? "activeNav" : "inactiveNav")}
      >
        <div>SAMOUCZEK</div>
      </NavLink>
      <NavLink
        to="/graj"
        className={({ isActive }) => (isActive ? "activeNav" : "inactiveNav")}
      >
        <div>GRAJ</div>
      </NavLink>
      <NavLink
        to="/osiagniecia"
        className={({ isActive }) => (isActive ? "activeNav" : "inactiveNav")}
      >
        <div>OSIĄGNIĘCIA</div>
      </NavLink>
    </div>
  );
};

export default Tabs;
