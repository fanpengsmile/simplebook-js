import React from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

let account, password;

const Login = (props) => {
    const { login, loginState } = props;
    if (loginState) {
        return <Redirect to='/' />
    } else {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账户：' ref={(input) => { account = input }} />
                    <Input placeholder='密码：' type='password' ref={(input) => { password = input }} />
                    <Button
                        onClick={() => login(account, password)}
                    >登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(account, password) {
        dispatch(actionCreators.login(account, password));
    }
})

export default connect(mapState, mapDispatch)(Login);