import React from 'react';
import ReactDOM from 'react-dom';
// 리덕스 추가
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./modules";
import './index.css';
import App from './App';

const store = createStore(rootReducer); // 추가


ReactDOM.render(
  <Provider store ={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

