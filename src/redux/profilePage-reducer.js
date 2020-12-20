const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_HEADER = 'UPDATE-NEW-POST-HEADER';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    newPostText: "",
    newPostHeader: "",
    posts: [
        { id: 1, header: "Заголовок поста", text: "Это текст поста", likes: 20 },
        { id: 2, header: "Еще один длинный заголовок поста Еще один длинный заголовок поста Еще один длинный заголовок поста", text: "Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста", likes: 15,},
        { id: 3, header: "Совершил ли самоубийство Гитлер", text: "Свалил та свалил тебе то шо лол", likes: 999 },
    ]
}
const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST: {
            const copy = {...state};
            copy.posts = [...state.posts];
            let newPost = {
                id: (state.posts.length + 1),
                text: state.newPostText,
                header: state.newPostHeader,
                likes: 0
            };
            copy.posts.unshift(newPost);
            copy.newPostText = "";
            copy.newPostHeader = "";
            return copy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const copy = {...state};
            copy.newPostText = action.newText;
            return copy;
        }
        case UPDATE_NEW_POST_HEADER: {
            const copy = {...state};
            copy.newPostHeader = action.newHeader;
            return copy;
        }
        default: {
            return state;
        }
    }

}

export const changePostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const changePostHeaderActionCreator = (header) => {
    return {type: UPDATE_NEW_POST_HEADER, newHeader: header}
}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export default profileReducer;