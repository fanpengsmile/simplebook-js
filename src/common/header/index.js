import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

class Header extends Component {

    render() {
        let {focused, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo /*href = "/"*/></Logo>
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载App</NavItem>
                    <NavItem className = 'right'>登陆</NavItem>
                    <NavItem className = 'right'>
                        <i className = 'iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in = {focused}
                        timeout = {200}
                        classNames = 'slide'
                        >
                            <NavSearch
                            onFocus = {handleInputFocus}
                            onBlur = {handleInputBlur}
                            className = {focused ? 'focused' : ''} 
                            ></NavSearch>
                        </CSSTransition>
                        <i 
                        className = {focused ? 'focused iconfont' : 'iconfont'} 
                        >&#xe795;</i>
                    </SearchWrapper>
                    <Addition>
                        <Button className = 'reg'>注册</Button>
                        <Button className = 'writter'>
                        <i className = 'iconfont'>&#xe607;</i>
                            写文章</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focused'
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapState, mapDispatch)(Header);