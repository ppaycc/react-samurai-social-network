// import {addPost} from "../../redux/state";

import SomeContainer from "./SomeContainer";
import React from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setProfileInf} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";

// const Profile from "./Profile";
// const { default: Some } = require("./Some");

// const AllProfile = (props) => {
//   return (
//     <div>
//       <Profile />
//       <SomeContainer/>
//     </div>
//   );
// };

class AllProfile extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        debugger
        if(!userId) {
            userId = this.props.userIdAuth;
        }
        console.log(userId);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response=>{
            // console.log(response.data);
            // console.log(this.props.setProfileInf(response.data));
            this.props.setProfileInf(response.data);
        });
    }

    render() {
        return <div>
            <Profile {...this.props}/>
            <SomeContainer/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userIdAuth: state.auth.userId
    }
}

const WithUrlId = withRouter(AllProfile)

const allProfileContainer = connect(mapStateToProps, {setProfileInf})(WithUrlId);

export default allProfileContainer;
