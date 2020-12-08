import s from './Sidebar.module.css';

const Sidebar = (props) => {
    // console.log(props.friends, 'sidebar')
    let friend = props.friends.map(el => {
        return (
            <div className={s.sidebar}>
                <div className={s.ava}><img src={el.ava} alt=""/></div>
                <div className={s.fullname}>{el.name}</div>
                {/*<div className={s.discription}></div>*/}
            </div>
        )
    })
    return (
        <div className={s.main}>
            {friend}

        </div>
    )
}

export default Sidebar;