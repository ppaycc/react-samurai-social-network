import state, { subscriber} from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reboot.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

const rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updataDialogMessages={store.updataDialogMessages.bind(store)} sendNewMessage={store.sendNewMessage.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());

store.subscriber(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
