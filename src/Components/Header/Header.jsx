import s from "./Header.module.css";
import Login from "../Login/Login";

const Header = (props) => {
  return (
    <div className={s.forHeader}>
      <header className={s.header}>
        <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png" />
          <div>{props.isAuth ? props.login : <Login/> } </div>
      </header>
    </div>
  );
};
export default Header;
