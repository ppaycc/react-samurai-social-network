
const initialState = {
    friends: [
        {id: 1, name: 'Anna', surName: 'Surname', ava: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg" },
        {id: 2, name: 'Bylochka', surName: 'Surname', ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
        {id: 3, name: 'Пупсик', surName: 'Surname', ava: "https://thumbs.dreamstime.com/b/%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D0%B0-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BD%D0%B5%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D0%B0-%D0%B8-%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D0%B0-r-145511699.jpg" }
    ]
}
const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;