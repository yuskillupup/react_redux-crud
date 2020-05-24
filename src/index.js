import React from 'react';
import ReactDOM from 'react-dom';
//storeの作成に必要
import { createStore, applyMiddleware} from 'redux'
// 全コンポーネントからアクセスできるようにする
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
// react-ui
import Button from '@material-ui/core/Button';



import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';


const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
// アプリケーション内部のstoreは集約
// 第二引数にミドルウェア
const store = createStore(reducer, enhancer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow}/>
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
