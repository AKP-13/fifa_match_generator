import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Player1 from './Player1';
import Player2 from './Player2';
import Filters from './Filters';
import '../../../../styles/Generator.css';

export class Generator extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render(){
        return (
            <Fragment>
                <div id="generatorsDiv" className="grid-container">
                    <Player1 className="grid-item" />
                    <Filters className="grid-item" />
                    <Player2 className="grid-item" />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Generator);