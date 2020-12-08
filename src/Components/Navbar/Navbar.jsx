import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Sidebar from "./Sidebar/Sidebar";
const Navbar = (props) => {
    return (
    <div>
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
        <div>
            <Sidebar friends={props.sidebar.friends}/>
        </div>
    </div>
  );
};

export default Navbar;
