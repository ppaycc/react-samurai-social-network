import s from "./CreatePost.module.css";
import React from "react";
import {addPostActionCreator, changePostHeaderActionCreator, changePostTextActionCreator} from "../../redux/profilePage-reducer";



const CreatePost = (props) => {
  let newText = React.createRef();
  let newHeader = React.createRef();

  let addPost = () => {
    props.ADDPOST();
  };

  const changePostText = () => {
    let text = newText.current.value;
    props.CHANGEBODY(text);
  };
  const changePostHeader = () => {
    let header = newHeader.current.value;
      props.CHANGEHEADER(header);
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
      <button onClick={addPost}>Пост</button>
    </div>
  );
};

export default CreatePost;
