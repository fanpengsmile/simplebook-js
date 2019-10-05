import React from 'react';
import Header from './common/header/index';
import './static/iconfont/iconfont.css';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store/index';
import {Provider} from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Provider store = {store}>
      <div>
        <Header/>
        <BrowserRouter>
          <div>
            <Route path='/' exact component = {Home}></Route>
            <Route path='/detail' exact component = {Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
