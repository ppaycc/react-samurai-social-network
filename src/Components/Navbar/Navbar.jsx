import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile" activeClassName={s.activeLink}>
        Profile
      </NavLink>
      <NavLink to="/dialog" activeClassName={s.activeLink}>
        Dialogs
      </NavLink>
      <NavLink to="#">News</NavLink>
      <NavLink to="#">Music</NavLink>
      <NavLink to="#">Settings</NavLink>
    </nav>
  );
};

export default Navbar;
