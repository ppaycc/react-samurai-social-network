import CreatePost from "./CreatePost";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    changePostHeaderActionCreator,
    changePostTextActionCreator
} from "../../redux/profilePage-reducer";

const mapStateToProps = (state) => {
    return {
        newPostHeader: state.profilePage.newPostHeader,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changeHeader: (value) => {
            dispatch(changePostHeaderActionCreator(value))
        },
        changeBody: value => {
            dispatch(changePostTextActionCreator(value))
        }
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;