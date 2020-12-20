import state, { subscriber} from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reboot.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderTree(state)
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
