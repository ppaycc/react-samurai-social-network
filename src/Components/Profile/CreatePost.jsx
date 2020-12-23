import s from "./CreatePost.module.css";
import React from "react";

const CreatePost = (props) => {
  let newText = React.createRef();
  let newHeader = React.createRef();

  const changePostText = () => {
    let text = newText.current.value;
    props.changeBody(text);
  };
  const changePostHeader = () => {
    let header = newHeader.current.value;
      props.changeHeader(header);
  };

  return (
    <div className={s.createPost}>
      <input
        onChange={changePostHeader}
        type="text"
        ref={newHeader}
        placeholder="Заголовок поста"
        value={props.newPostHeader}
      />
      <textarea
        onChange={changePostText}
        placeholder="Новый пост"
        ref={newText}
        value={props.newPostText}
      />
      <button onClick={props.addPost}>Пост</button>
    </div>
  );
};

export default CreatePost;
