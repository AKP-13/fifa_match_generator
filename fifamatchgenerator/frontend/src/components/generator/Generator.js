import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Player1 from './Player1';
import Player2 from './Player2'

export class Generator extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render(){
        return (
            <Fragment>
                <Player1 />
                <Player2 />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Generator);