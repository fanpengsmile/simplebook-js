import React, { useEffect } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import { withRouter } from 'react-router-dom';

const Detail = (props) => {
    const { title, content } = props;
    useEffect(() => {
        const id = props.match.params.id;
        props.getDetail(id);
    }, [props]);
    return (
        <DetailWrapper>
            <Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
        </DetailWrapper>
    )
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));