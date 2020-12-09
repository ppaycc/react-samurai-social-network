// import {addPost} from "../../redux/state";

const { default: Profile } = require("./Profile");
const { default: Some } = require("./Some");

const AllProfile = (props) => {
  return (
    <div>
      <Profile />
      <Some
        posts={props.state.posts}
        addPost={props.addPost}
        fornewpost={props.state}
      />
    </div>
  );
};

export default AllProfile;
