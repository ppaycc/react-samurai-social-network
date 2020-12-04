const { default: Profile } = require("./Profile");
const { default: Some } = require("./Some");

const AllProfile = (props) => {
  return (
    <div>
      <Profile />
      <Some posts={props.state.posts} />
    </div>
  );
};

export default AllProfile;
