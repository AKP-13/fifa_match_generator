import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Generator extends Component {
    render(){
        return (
            <div>
                <h1>This is where the Generator will go!</h1>
            </div>
        )
    }
}

export default connect(null)(Generator);