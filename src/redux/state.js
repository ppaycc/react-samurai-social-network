// let rerenderTree = () => {
//     console.log("rerender");
// }

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
            newDialogMessage: 'new',
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
    rerenderTree() {
        debugger;
        console.log("rerender");
    },
    addPost() {
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


        this.rerenderTree(this._state);
    },
    updataNewPostText(newText) {
        this._state.profilePage.newPostText = newText;

        this.rerenderTree(this._state);
    },
    updataNewPostHeader(newHeader) {
        this._state.profilePage.newPostHeader = newHeader;

        this.rerenderTree(this._state);
    },
    updataDialogMessages(newValue) {
        this._state.dialogPage.newDialogMessage = newValue;
        this.rerenderTree(this._state);
    },
    sendNewMessage() {
        debugger;
        if(this._state.dialogPage.newDialogMessage.length >= 1){
            console.log(this._state.dialogPage.newDialogMessage)
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
        this.rerenderTree(this._state);
    },
    subscriber(observer) {
        this.rerenderTree = observer;
    },

};

//   let state = {
//     profilePage:  {
//         newPostText: "",
//         newPostHeader: "",
//         posts: [
//             { id: 1, header: "Заголовок поста", text: "Это текст поста", likes: 20 },
//             { id: 2, header: "Еще один длинный заголовок поста Еще один длинный заголовок поста Еще один длинный заголовок поста", text: "Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста", likes: 15,},
//             { id: 3, header: "Совершил ли самоубийство Гитлер", text: "Свалил та свалил тебе то шо лол", likes: 999 },
//       ],},
//       dialogPage: {
//         dialogItem: [
//             { id: 1, name: "Petya" },
//             { id: 2, name: "Vasya" },
//             { id: 3, name: "Igor" },
//             { id: 4, name: "Sveta" },
//             { id: 5, name: "Bylochka" },
//             { id: 6, name: "Oleg" },
//             { id: 7, name: "admin" },
//           ],
//         newDialogMessage: '',
//         dialogMessages: [
//             {id: 1, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
//             {id: 2, value: "sting ntcnbs ываывнг ывашгывпа ываршныва вышра", time: "12:08", who: "input"},
//             {id: 3, value: "stiывагшп выарывравырарвыаывооаывоа в ва ва в в в в вв в  вng", time: "12:08", who: "output"},
//             {id: 4, value: "Я ЭТО СДЕЛАЛАЛАЛАЛАЛЛАЛ", time: "12.08", who: "output"},
//             {id: 5, value: "sting ntcnbs ываывнг ывашгывпа ываршныва вышра", time: "12:08", who: "input"},
//             {id: 6, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
//             {id: 7, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
//             {id: 8, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
//             {id: 9, value: "sting Больша стыроыка sdf", time: "12:08", who: "input"},
//         ]
//       },
//       sidebar: {
//         friends: [
//             {id: 1, name: 'Anna', surName: 'Surname', ava: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg" },
//             {id: 2, name: 'Bylochka', surName: 'Surname', ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
//             {id: 3, name: 'Пупсик', surName: 'Surname', ava: "https://thumbs.dreamstime.com/b/%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D0%B0-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BD%D0%B5%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D0%B0-%D0%B8-%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D0%B0-r-145511699.jpg" }
//         ]
//       },
//       newsPage: {},
//       settingsPage: {},
//       musicPage: {}
//   }
// export const addPost = () => {
//   if(state.profilePage.newPostText && state.profilePage.newPostHeader){
//     let newPost = {
//         id: (state.profilePage.posts.length+1),
//         text: state.profilePage.newPostText,
//         header: state.profilePage.newPostHeader,
//         likes: 0
//     }
//     state.profilePage.posts.unshift(newPost);
//     state.profilePage.newPostText = "";
//     state.profilePage.newPostHeader = "";
//   }
//
//
//   rerenderTree(state);
// }
// export const updataNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//
//   rerenderTree(state);
// }
// export const updataNewPostHeader = (newHeader) => {
//   state.profilePage.newPostHeader = newHeader;
//
//   rerenderTree(state);
// }
// ////////////////////////////////////////////////////////////
// export const updataDialogMessages = (newValue) => {
//       state.dialogPage.newDialogMessage = newValue;
//       rerenderTree(state);
// }
// export const sendNewMessage = () => {
//
//     // console.log(11111)
//       if(state.dialogPage.newDialogMessage.length >= 1){
//           console.log(state.dialogPage.newDialogMessage)
//           let sms = {
//               id: (state.dialogPage.dialogMessages.length + 1),
//               value: state.dialogPage.newDialogMessage,
//               time: "12:12",
//               who: "output"
//           }
//           state.dialogPage.dialogMessages.unshift(sms);
//       }
//       state.dialogPage.newDialogMessage = "";
//       rerenderTree(state);
// }
//
// export const subscriber = (observer) => {
//     rerenderTree = observer;
// }

export default store;