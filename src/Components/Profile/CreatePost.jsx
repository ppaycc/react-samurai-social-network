import s from "./CreatePost.module.css";
import React from "react";

const CreatePost = (props) => {
  let newPostText = React.createRef();
  let newPostHeader = React.createRef();
  let addPost = () => {
    props.dispatch({type: 'ADD-POST'})
  };

  const cnahgePostText = () => {
    let text = newPostText.current.value;
    props.dispatch({type: 'UPDATA-NEW-POST-TEXT', newText: text});
  };
  const changePostHeader = () => {
    let header = newPostHeader.current.value;
      props.dispatch({type: 'UPDATA-NEW-POST-HEADER', newHeader: header})
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
