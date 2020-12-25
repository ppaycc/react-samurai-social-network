import CreatePost from "./CreatePost";
import {connect} from "react-redux";
import {
    addPost,
    changePostHeader,
    changePostText
} from "../../redux/profilePage-reducer";

const mapStateToProps = (state) => {
    return {
        newPostHeader: state.profilePage.newPostHeader,
        newPostText: state.profilePage.newPostText
    }
}

// const mapDispatchToProps =(dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPost())
//         },
//         changeHeader: (value) => {
//             dispatch(changePostHeader(value))
//         },
//         changeBody: value => {
//             dispatch(changePostText(value))
//         }
//     }
// }

const CreatePostContainer = connect(mapStateToProps, {addPost, changePostHeader, changePostText})(CreatePost);

export default CreatePostContainer;