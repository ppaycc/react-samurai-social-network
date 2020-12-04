import s from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <div className={s.createPost}>
      <textarea placeholder="Новый пост"></textarea>
      <button>Пост</button>
    </div>
  );
};

export default CreatePost;
