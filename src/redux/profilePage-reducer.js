const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_HEADER = 'UPDATE-NEW-POST-HEADER';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROPFILE = 'SET_PROPFILE';

const initialState = {
    newPostText: "",
    newPostHeader: "",
    posts: [
        { id: 1, header: "Заголовок поста", text: "Это текст поста", likes: 20 },
        { id: 2, header: "Еще один длинный заголовок поста Еще один длинный заголовок поста Еще один длинный заголовок поста", text: "Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста", likes: 15,},
        { id: 3, header: "Совершил ли самоубийство Гитлер", text: "Свалил та свалил тебе то шо лол", likes: 999 },
    ],
    profile: null
}
const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST: {
            const copy = {...state};
            copy.posts = [...state.posts];
            if(copy.newPostHeader.trim().length > 1 && copy.newPostText.trim().length > 1){
                let newPost = {
                    id: (state.posts.length + 1),
                    text: state.newPostText,
                    header: state.newPostHeader,
                    likes: 0
                };
                copy.posts.unshift(newPost);
                copy.newPostText = "";
                copy.newPostHeader = "";
            }
            return copy;
        }
        case UPDATE_NEW_POST_TEXT: {
            // const copy = {...state};
            // copy.newPostText = action.newText;
            return {...state, newPostText: action.newText};
        }
        case UPDATE_NEW_POST_HEADER: {
            // const copy = {...state};
            // copy.newPostHeader = action.newHeader;
            return {...state, newPostHeader: action.newHeader};
        }
        case SET_PROPFILE :{
            return {...state, profile: action.profile}
        }
        default: {
            return state;
        }
    }

}

export const changePostText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const changePostHeader = (header) => {
    return {type: UPDATE_NEW_POST_HEADER, newHeader: header}
}
export const addPost = () => {
    return {type: ADD_POST}
}
export const setProfileInf = (profile) => {
    return {type: SET_PROPFILE, profile}
}

export default profileReducer;