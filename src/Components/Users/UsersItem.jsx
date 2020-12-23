import s from './UsersItem.module.css'
import ava from '../../default/img/user.png';

const UserItem = (props) => {
    // debugger
    console.log(props.ava)
    return(
        <div className={s.item}>
            <div className={s.one}>
                <div className={s.ava}><img src={props.ava ? props.ava : ava} alt=""/></div>
                {props.followed ? <button className={s.btnF} onClick={()=>props.unfollow(props.id)}>Unfollow</button> : <button className={s.btnF} onClick={()=>props.follow(props.id)}>Follow</button>}
            </div>
            <div className={s.two}>
                <div className={s.name}>{props.name}</div>
                <div className={s.status}>{props.status}</div>
            </div>
            <div className={s.three}>
                <p className={s.city}>Moskov,</p>
                <p className={s.country}>Russia</p>
            </div>
        </div>
    )
}

export default UserItem;