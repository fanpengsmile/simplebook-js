import React from 'react';
import {
    WritterWrapper,
    WritterItem
} from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Writter = (props) => {
    const { list } = props;
    return (
        <WritterWrapper>
            {list.map((item) => {
                return (
                    <WritterItem key={item.get('id')}>
                        <Link to={'/user/' + item.get('id')}>
                            <img className='img' alt='no support!!!' src={item.get('imgUrl')}></img>
                            <p className='autor'>{item.get('desc')}</p>
                        </Link>
                    </WritterItem>
                )
            })}
        </WritterWrapper>
    )
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writterList'])
})

export default connect(mapState, null)(Writter);