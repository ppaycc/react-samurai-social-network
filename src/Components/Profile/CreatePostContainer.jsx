import CreatePost from "./CreatePost";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    changePostHeaderActionCreator,
    changePostTextActionCreator
} from "../../redux/profilePage-reducer";

// const CreatePostContainer = () => {
//     return <CreatePost/>
// }

const mapStateToProps = (state) => {
    return {
        newPostHeader: state.profilePage.newPostHeader,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        ADDPOST: () => {
            dispatch(addPostActionCreator())
        },
        CHANGEHEADER: (value) => {
            dispatch(changePostHeaderActionCreator(value))
        },
        CHANGEBODY: value => {
            dispatch(changePostTextActionCreator(value))
        }
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;