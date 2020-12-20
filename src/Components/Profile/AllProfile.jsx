// import {addPost} from "../../redux/state";

import SomeContainer from "./SomeContainer";
import React from "react";

const { default: Profile } = require("./Profile");
// const { default: Some } = require("./Some");

const AllProfile = (props) => {
  return (
    <div>
      <Profile />
      <SomeContainer/>
    </div>
  );
};

export default AllProfile;
