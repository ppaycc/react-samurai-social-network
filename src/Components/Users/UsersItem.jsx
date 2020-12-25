import s from './UsersItem.module.css'
import ava from '../../default/img/user.png';
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    // console.log(props.ava)
    return(
        <div className={s.item}>
            <div className={s.one}>
                <NavLink to={'/profile/' + props.id} >
                    <div className={s.ava}><img src={props.ava ? props.ava : ava} alt=""/></div>
                </NavLink>
                {props.followed ? <button className={s.btnF} onClick={()=>props.unfollow(props.id)}>Unfollow</button> : <button className={s.btnF} onClick={()=>props.follow(props.id)}>Follow</button>}
            </div>
            <div className={s.two}>
                <p className={s.name}>{props.name}</p>
                <p className={s.status}>{props.status}</p>
            </div>
            <div className={s.three}>
                <p className={s.city}>Moskov,</p>
                <p className={s.country}>Russia</p>
            </div>
        </div>
    )
}

export default UserItem;