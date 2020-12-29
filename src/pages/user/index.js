import React, { useEffect } from 'react';
import { UserWrapper } from './style';
import { connect } from 'react-redux';

const User = (props) => {
    useEffect(() => {
        const id = props.match.params.id;
        this.id = id;
    }, [props]);
    return (
        <UserWrapper >
            dfdfd
        </UserWrapper>
    )
}

export default connect(null, null)(User);