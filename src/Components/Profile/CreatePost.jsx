import s from "./CreatePost.module.css";
import React from "react";
import {addPostActionCreator, changePostHeaderActionCreator, changePostTextActionCreator} from "../../redux/state";



const CreatePost = (props) => {
  let newPostText = React.createRef();
  let newPostHeader = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  const changePostText = () => {
    let text = newPostText.current.value;
    props.dispatch(changePostTextActionCreator(text));
  };
  const changePostHeader = () => {
    let header = newPostHeader.current.value;
      props.dispatch(changePostHeaderActionCreator(header))
  };

  return (
    <div className={s.createPost}>
      <input
        onChange={changePostHeader}
        type="text"
        ref={newPostHeader}
        placeholder="Заголовок поста"
        value={props.forPosts.newPostHeader}
      />
      <textarea
        onChange={changePostText}
        placeholder="Новый пост"
        ref={newPostText}
        value={props.forPosts.newPostText}
      />
      <button onClick={addPost}>Пост</button>
    </div>
  );
};

export default CreatePost;
