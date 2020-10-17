import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Generator extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render(){
        return (
            <div>
                <h1>This is where the Generator will go!</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Generator);