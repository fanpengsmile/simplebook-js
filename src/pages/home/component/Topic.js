import React from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

const Topic = (props) => {
    const { list } = props;
    return (
        <TopicWrapper>
            {list.map((item) => {
                return (
                    <TopicItem key={item.get('id')}>
                        <img className='topic-img' alt='no support' src={item.get('imgUrl')}></img>
                        {item.get('title')}
                    </TopicItem>
                )
            })}
        </TopicWrapper>
    )
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);