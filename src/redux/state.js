// let posts = [
//     { id: 1, header: "Заголовок поста", text: "Это текст поста", likes: 20 },
//     {
//       id: 2,
//       header:
//         "Еще один длинный заголовок поста Еще один длинный заголовок поста Еще один длинный заголовок поста",
//       text:
//         "Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста",
//       likes: 15,
//     },
//     {
//       id: 3,
//       header: "Совершил ли самоубийство Гитлер",
//       text: "Да хуй его знает заебал блять иди спи",
//       likes: 999,
//     },
//   ];
  
//   let dialogItem = [
//     { id: 1, name: "Petya" },
//     { id: 2, name: "Vasya" },
//     { id: 3, name: "Igor" },
//     { id: 4, name: "Sveta" },
//     { id: 5, name: "Bylochka" },
//     { id: 6, name: "Oleg" },
//     { id: 7, name: "admin" },
//   ];


  let state = {
    profilePage:  {
        posts: [
            { id: 1, header: "Заголовок поста", text: "Это текст поста", likes: 20 },
            { id: 2, header: "Еще один длинный заголовок поста Еще один длинный заголовок поста Еще один длинный заголовок поста", text: "Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста Это текст длинного поста", likes: 15,},
            { id: 3, header: "Совершил ли самоубийство Гитлер", text: "Да хуй его знает заебал блять иди спи", likes: 999 },
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
          ]
      }
  }

  export default state;