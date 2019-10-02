import React, {Component} from 'react';
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

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }

    render() {
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
                        <NavSearch
                        onFocus = {this.handleInputFocus}
                        onBlur = {this.handleInputBlur}
                        className = {this.state.focused ? 'focused' : ''} 
                        ></NavSearch>
                        <i 
                        className = {this.state.focused ? 'focused iconfont' : 'iconfont'} 
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

export default Header;