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
      <NavLink to="news" activeClassName={s.activeLink}>News</NavLink>
      <NavLink to="music" activeClassName={s.activeLink}>Music</NavLink>
      <NavLink to="settings" activeClassName={s.activeLink}>Settings</NavLink>
    </nav>
  );
};

export default Navbar;
