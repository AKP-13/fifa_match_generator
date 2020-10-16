import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getResults } from '../../actions/results';

export class Results extends Component {
    static propTypes = {
        results: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getResults();
    }

    render() {
        return (
            <Fragment>
                <h2>Results</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
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
                                <td>{result.id}</td>
                                <td>{result.opponentName}</td>
                                <td>{result.myTeam}</td>
                                <td>{result.myGoals}</td>
                                <td>{result.opponentGoals}</td>
                                <td>{result.opponentTeam}</td>
                                <td>{result.notes}</td>
                                <td><button className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    results: state.results.results
});

export default connect(mapStateToProps, { getResults })(Results);