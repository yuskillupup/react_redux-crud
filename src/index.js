import React from 'react';
import ReactDOM from 'react-dom';
//storeの作成に必要
import { createStore, applyMiddleware} from 'redux'
// 全コンポーネントからアクセスできるようにする
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

// アプリケーション内部のstoreは集約
// 第二引数にミドルウェア
const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EventsIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
