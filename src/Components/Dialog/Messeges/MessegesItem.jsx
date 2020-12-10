import s from './MessegesItem.module.css'
const MessagesItem = (props) => {
    return (
        <div className={`${s.main} ${s[props.who]}`}>
            <div className={s.span}>
                <p>
                    {props.value}
                    <span className={`${s.spy} ${s[props.who]}`}>1212p</span>
                </p>
                <span className={ `${s.time} ${s[props.who]}` }> {props.time} </span>
            </div>
        </div>
    );
};

export default MessagesItem;
