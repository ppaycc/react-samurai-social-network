import s from "./Post.module.css";
import like from "./like.svg";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.ava}></div>
      <div className={s.textPost}>
        <h4>{props.header}</h4>
        <p>{props.text}</p>
      </div>
      <div></div>
      <div className={s.like}>
        <img src={like} />
        <span>{props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
