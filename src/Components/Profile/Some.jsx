import CreatePost from "./CreatePost";
import Post from "./MyPosts/Post";
import s from "./Some.module.css";
import CreatePostContainer from "./CreatePostContainer";

const Some = (props) => {
  let postsData = props.posts.map((p) => (
    <Post id={p.id} header={p.header} text={p.text} likes={p.likes} />
  ));

  return (
    <div className={s.some}>
      {/*<CreatePost dispatch={props.dispatch} forPosts={props.fornewpost} />*/}
      <CreatePostContainer/>
      {postsData}
    </div>
  );
};

export default Some;
