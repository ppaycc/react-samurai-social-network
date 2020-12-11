import s from "./CreatePost.module.css";
import React from "react";
import store from "../../redux/state";

const CreatePost = (props) => {
  console.log(props.forPosts);
  let newPostText = React.createRef();
  let newPostHeader = React.createRef();
  let addPost = () => {
    store.addPost();
  };

  const cnahgePostText = () => {
    let text = newPostText.current.value;
    store.updataNewPostText(text);
  };
  const changePostHeader = () => {
    let header = newPostHeader.current.value;
    store.updataNewPostHeader(header);
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
        onChange={cnahgePostText}
        placeholder="Новый пост"
        ref={newPostText}
        value={props.forPosts.newPostText}
      />
      <button onClick={addPost}>Пост</button>
    </div>
  );
};

export default CreatePost;
