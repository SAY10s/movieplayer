import { NavLink } from "react-router-dom";
const Tabs = () => {
  return (
    <div className="tabs">
      <NavLink
        to="/odbierzprezent"
        className={({ isActive }) => (isActive ? "activeNav" : "inactiveNav")}
      >
        <div>ODBIERZ PREZENT</div>
      </NavLink>
      <NavLink
        to="/graj"
        className={({ isActive }) => (isActive ? "activeNav" : "inactiveNav")}
      >
        <div>GRAJ</div>
      </NavLink>
      <NavLink
        to="/ogrze"
        className={({ isActive }) => (isActive ? "activeNav" : "inactiveNav")}
      >
        <div>O grze</div>
      </NavLink>
    </div>
  );
};

export default Tabs;
