import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Player1 from "./Player1";
import Player2 from "./Player2";
import Filters from "./Filters";
import "../../../../styles/Generator.css";
import { Link } from "react-router-dom";

export class Generator extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    };

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container" id="jumbotronContainer">
                        <h1 className="display-4" id="welcomeText">
                            Welcome to the FIFA 21 Random Match Generator!
                        </h1>

                        <p id="disclaimer">
                            This app is not affiliated with or sponsored by
                            Electronic Arts Inc. or its licensors.
                        </p>
                    </div>
                </div>

                <div id="generatorsDiv" className="grid-container">
                    <Player1 id="player1Component" />
                    <Player2 id="player2Component" />
                    <Filters id="filtersComponent" />
                    {isAuthenticated ? (
                        <Link to="/login" id="loginLink">
                            Record your results!
                        </Link>
                    ) : (
                        <Link to="/login" id="loginLink">
                            Login to record your results!
                        </Link>
                    )}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Generator);
