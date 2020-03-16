import React, { PureComponent } from 'react';
import { UserWrapper} from './style';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

class User extends PureComponent {
    render() {
        return (
            <UserWrapper >
                dfdfd
                </UserWrapper>
        )
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.id = id;
    }
}

// const mapState = (state) => ({
//     loginState: state.getIn(['login', 'login'])
// })

// const mapDispatch = (dispatch) => ({
//     login(account, password) {
//         dispatch(actionCreators.login(account, password));
//     }
// })

export default connect(null, null)(User);