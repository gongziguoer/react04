import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Store from './store/store'   //index里直接引入Store
import {Provider} from 'react-redux'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    //通过Provider 提供器 将store对象挂到根组件上，根组件下的所有子组件可以不用引store
    <Provider store={Store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
