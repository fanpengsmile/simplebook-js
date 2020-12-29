import React from 'react';
import {
    RecommendWrapper,
    RecommendItem
} from '../style';
import { connect } from 'react-redux';

const Recommend = (props) => {
    const { list } = props;
    return (
        <RecommendWrapper>
            {list.map((item) => {
                return (
                    <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                )
            })}
        </RecommendWrapper>
    )
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);