import {connect} from "react-redux";
import Some from "./Some";

const mapDispatchToProps = () => {
    return {

    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(Some);

export default CreatePostContainer;
