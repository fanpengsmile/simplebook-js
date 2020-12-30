import React from 'react';
import Header from './common/header/index';
import './static/iconfont/iconfont.css';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store/index';
import {Provider} from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login/index';
import Write from './pages/writer/index';
import User from './pages/user/index';

const App = () => {
  return (
    <Provider store = {store}>
      <div>
        <BrowserRouter>
          <Header/>
          <div>
            <Route path='/' exact component = {Home}></Route>
            <Route path='/detail/:id' exact component = {Detail}></Route>
            <Route path='/login' exact component = {Login}></Route>
            <Route path='/write' exact component = {Write}></Route>
            <Route path='/user' exact component = {User}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
