import React, {PureComponent} from 'react';
import {DetailWrapper, Header, Content} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';
import {withRouter} from 'react-router-dom';

class Detail extends PureComponent {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML = {{__html: content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDetail(id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));