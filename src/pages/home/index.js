import React, {Component} from 'react';
import {HomeWrapper,
    HomeLeft,
    HomeRight} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writter from './component/Writter';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className = 'banner-img'  alt = 'not support img !!!' src = '//upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writter></Writter>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;