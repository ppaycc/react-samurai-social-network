import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebarPage-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
});

const store = createStore(reducers);

export default store;