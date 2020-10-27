import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getResults, deleteResult } from '../../actions/results';

import "../../../../styles/Results.css";

export class Results extends Component {
    static propTypes = {
        results: PropTypes.array.isRequired,
        getResults: PropTypes.func.isRequired,
        deleteResult: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getResults();
    }

    render() {
        return (
            <Fragment>
                <div className="table-responsive" id="tableBackground">
                    <div id="tableBackground">
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Opponent Name</th>
                                    <th>My Team</th>
                                    <th>My Goals</th>
                                    <th>Opponent Goals</th>
                                    <th>Opponent Team</th>
                                    <th>Notes</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.results.map(result => (
                                    <tr key={result.id}>
                                        <td>{result.opponentName}</td>
                                        <td>{result.myTeam}</td>
                                        <td>{result.myGoals}</td>
                                        <td>{result.opponentGoals}</td>
                                        <td>{result.opponentTeam}</td>
                                        <td>{result.notes}</td>
                                        <td><button onClick={this.props.deleteResult.bind(this, result.id)} className="btn btn-danger btn-sm" id="resultsDeleteButton">Delete</button></td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
                

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    results: state.results.results
});

export default connect(mapStateToProps, { getResults, deleteResult })(Results);