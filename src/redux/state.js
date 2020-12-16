const UPDATE_DIALOG_MESSAGES = 'UPDATE-DIALOG-MESSAGES';
const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_HEADER = 'UPDATE-NEW-POST-HEADER';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const store = {
    _state: {
        profilePage:  {
            newPostText: "",
            newPostHeader: "",
            posts: [
                { id: 1, header: "Заголовок поста", text: "Это текст поста", likes: 20 },
                { id: 2, header: "Еще один длинный заголовок поста Еще один длинный заголовок поста Еще один длинный заголовок поста", text: "Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста", likes: 15,},
                { id: 3, header: "Совершил ли самоубийство Гитлер", text: "Свалил та свалил тебе то шо лол", likes: 999 },
            ],},
        dialogPage: {
            dialogItem: [
                { id: 1, name: "Petya" },
                { id: 2, name: "Vasya" },
                { id: 3, name: "Igor" },
                { id: 4, name: "Sveta" },
                { id: 5, name: "Bylochka" },
                { id: 6, name: "Oleg" },
                { id: 7, name: "admin" },
            ],
            newDialogMessage: '',
            dialogMessages: [
                {id: 1, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
                {id: 2, value: "sting ntcnbs ываывнг ывашгывпа ываршныва вышра", time: "12:08", who: "input"},
                {id: 3, value: "stiывагшп выарывравырарвыаывооаывоа в ва ва в в в в вв в  вng", time: "12:08", who: "output"},
                {id: 4, value: "Я ЭТО СДЕЛАЛАЛАЛАЛАЛЛАЛ", time: "12.08", who: "output"},
                {id: 5, value: "sting ntcnbs ываывнг ывашгывпа ываршныва вышра", time: "12:08", who: "input"},
                {id: 6, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
                {id: 7, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
                {id: 8, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
                {id: 9, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
            ]
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Anna', surName: 'Surname', ava: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg" },
                {id: 2, name: 'Bylochka', surName: 'Surname', ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
                {id: 3, name: 'Пупсик', surName: 'Surname', ava: "https://thumbs.dreamstime.com/b/%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D0%B0-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BD%D0%B5%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D0%B0-%D0%B8-%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D0%B0-r-145511699.jpg" }
            ]
        },
        newsPage: {},
        settingsPage: {},
        musicPage: {}
    },
    getState() {
      return this._state
    },
    _rerenderTree() {
        console.log("rerender");
    },
    dispatch(action) {
      if(action.type === ADD_POST){
          if(this._state.profilePage.newPostText && this._state.profilePage.newPostHeader){
              let newPost = {
                  id: (this._state.profilePage.posts.length+1),
                  text: this._state.profilePage.newPostText,
                  header: this._state.profilePage.newPostHeader,
                  likes: 0
              }
              this._state.profilePage.posts.unshift(newPost);
              this._state.profilePage.newPostText = "";
              this._state.profilePage.newPostHeader = "";
          }
          this._rerenderTree(this._state);

      }  else if (action.type === UPDATE_NEW_POST_TEXT){
          this._state.profilePage.newPostText = action.newText;
          this._rerenderTree(this._state);

      } else if (action.type === UPDATE_NEW_POST_HEADER) {
          this._state.profilePage.newPostHeader = action.newHeader;
          this._rerenderTree(this._state);

      } else if (action.type === UPDATE_DIALOG_MESSAGES) {
          this._state.dialogPage.newDialogMessage = action.newValue;
          this._rerenderTree(this._state);

      } else if (action.type === SEND_MESSAGE){
          if(this._state.dialogPage.newDialogMessage.length >= 1){
              let sms = {
                  id: (this._state.dialogPage.dialogMessages.length + 1),
                  value: this._state.dialogPage.newDialogMessage,
                  time: "12:12",
                  who: "output"
              }
              this._state.dialogPage.dialogMessages.unshift(sms);
              this._state.dialogPage.newDialogMessage = "";
          }
          this._state.dialogPage.newDialogMessage = "";
          this._rerenderTree(this._state);

      }
    },
    subscriber(observer) {
        this._rerenderTree = observer;
    },

};

export const changePostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const changePostHeaderActionCreator = (header) => {
    return {type: UPDATE_NEW_POST_HEADER, newHeader: header}
}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const sendMessageActionCreactor = () => {
    return {type: SEND_MESSAGE}
}
export const updateDialogMessageActionCreator = (text) =>{
    return {type: UPDATE_DIALOG_MESSAGES, newValue: text}
}

export default store;