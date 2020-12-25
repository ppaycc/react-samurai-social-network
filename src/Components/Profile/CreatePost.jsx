import s from "./CreatePost.module.css";
import React from "react";

const CreatePost = (props) => {
  let newText = React.createRef();
  let newHeader = React.createRef();

  const changePostTexts = () => {
    let text = newText.current.value;
    props.changePostText(text);
  };
  const changePostHeader = () => {
    let header = newHeader.current.value;
      props.changePostHeader(header);
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
        onChange={changePostTexts}
        placeholder="Новый пост"
        ref={newText}
        value={props.newPostText}
      />
      <button onClick={props.addPost}>Пост</button>
    </div>
  );
};

export default CreatePost;
