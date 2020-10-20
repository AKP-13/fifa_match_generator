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
                <div className="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container" id="jumbotronContainer">
                        <h1 className="display-4" id="welcomeText">Welcome to the FIFA 21 Random Match Generator!</h1>
                            <ol>
                                <li>Randomise the nation</li>
                                <li>Randomise the league</li>
                                <li>Randomise the team</li>
                            </ol>
                    </div>
                </div>

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